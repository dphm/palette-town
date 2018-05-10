#![feature(iterator_step_by)]

const VALS_PER_PIXEL: usize = 4;

use std::mem;
use std::slice;
use std::os::raw::c_void;

#[no_mangle]
pub extern "C" fn alloc(size: usize) -> *mut c_void {
    let mut buf = Vec::with_capacity(size);
    let ptr = buf.as_mut_ptr();
    mem::forget(buf);
    return ptr as *mut c_void;
}

#[no_mangle]
pub extern "C" fn transform_grayscale(pointer: *mut u8, max_width: usize, max_height: usize) {
    let byte_size = max_width * max_height * VALS_PER_PIXEL;
    let bytes = unsafe { slice::from_raw_parts_mut(pointer, byte_size) };

    for i in (0..byte_size).step_by(VALS_PER_PIXEL) {
        let val = match bytes[i] {
            0 ..= 40 => 0,
            40 ..= 85 => 85,
            85 ..= 170 => 170,
            _ => 255
        };

        bytes[i] = val;
        bytes[i + 1] = val;
        bytes[i + 2] = val;
        bytes[i + 3] = 255;
    }
}

pub fn avg(vals: &[u8]) -> u8 {
    let sum = vals.iter().fold(0u32, |sum, &x| sum + x as u32);
    (sum / vals.len() as u32) as u8
}
