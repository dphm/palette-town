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
pub extern "C" fn transform_grayscale(pointer: *mut u8, max_width: usize, max_height: usize, num_colors: usize) {
    let palette_size = num_colors * VALS_PER_PIXEL;
    let image_size = max_width * max_height * VALS_PER_PIXEL;
    let bytes = unsafe { slice::from_raw_parts_mut(pointer, palette_size + image_size) };

    for i in (palette_size..image_size).step_by(VALS_PER_PIXEL) {
        let vals = &bytes[i..i+3].to_vec();
        let color = match avg(&vals) {
            0 ..= 63 => 0,
            64 ..= 127 => 1,
            128 ..= 191 => 2,
            _ => 3
        };

        let color_index = color * VALS_PER_PIXEL;
        bytes[i] = bytes[color_index];
        bytes[i + 1] = bytes[color_index + 1];
        bytes[i + 2] = bytes[color_index + 2];
    }
}

pub fn avg(vals: &[u8]) -> u8 {
    let sum = vals.iter().fold(0u32, |sum, &x| sum + x as u32);
    (sum / vals.len() as u32) as u8
}
