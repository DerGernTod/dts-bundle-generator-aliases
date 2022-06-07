import { Foo } from "./foo";

export interface Augmented {
    [Foo.BAR]: string
}