import { Foo } from "@shared/foo";

declare module "@shared/foo" {
    const enum Foo {
        BAZ = "baz"
    }
}

declare module "@shared/foo-map" {
    interface Augmented {
        [Foo.BAZ]: string
    }
}