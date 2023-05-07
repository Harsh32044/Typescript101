const enum SeatChoice {
    AISLE,
    MIDDLE,
    WINDOW,
    FOURTH
}

const enum SeatChoice2 {
    AISLE = "aisle",
    MIDDLE = "middle",
    WINDOW = "window",
    FOURTH = 'fourth'
}

enum SeatChoice3 {
    AISLE = "aisle",
    MIDDLE = 22,
    WINDOW,
    FOURTH
}
/* When enum is defined in TS directly, then while runtime it(enum) generates a JS Object, with key as the Member name
and values as provided or defaulted. This object is mutable, the values can be changed, members can be removed,
added and modified during runtime. This can lead to inconsistencies

Using const with enums will ensure that while runtime, no object is generated, and the corresponding member values 
are directly substituted in your code. This makes program efficient, as object isn't getting created and risk of alteration
is also avoided*/

//Not assigning values to enum members explicitly, will end up giving them values starting from 0 (default TS behaviour)
//Providing number to anyone of them will assign increasing numbers as values to upcoming enums
//Providing string will break this rule, so if string given to any one, we need to give string values to all of them
const HSSeat = SeatChoice2.AISLE