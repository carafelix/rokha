import { assert } from "jsr:@std/assert";
import { Rokha } from "../src/rokha.ts";

const narciso = Deno.readTextFileSync('assets/txt/narciso.pdf.txt')

Deno.test("Text Cleanups", (t) => {
    const manipulator = new Rokha(narciso)
    assert(!manipulator
        .collapseBlankLines()
        .text.includes('\n\n\n'))
})