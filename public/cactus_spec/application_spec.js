//////////
// .alert

//// round box
Cactus.expect(".alert").toHaveMargin("10px 0px");
Cactus.expect(".alert").toHavePadding("10px");
Cactus.expect(".alert").toHaveBorderWidth("1px");

//// colors
Cactus.expect(".alert").toHaveBorderColor("#FF0000");
Cactus.expect(".alert", "background-color").toHaveColor("#FFCCCC");

//// font
Cactus.expect(".alert p", "font-size").toEqual("20px");


//////////
// .notice

//// round box
Cactus.expect(".notice").toHaveMargin("10px 0px");
Cactus.expect(".notice").toHavePadding("10px");
Cactus.expect(".notice").toHaveBorderWidth("1px");

//// box colors
Cactus.expect(".notice").toHaveBorderColor("#008000");
Cactus.expect(".notice", "background-color").toHaveColor("#4DFF4D");

//// font
Cactus.expect(".notice p", "font-size").toEqual("20px");










//////////
//// Refactored
//
//function test_round_box(selector) {
//  Cactus.expect(selector).toHaveMargin("10px 0px");
//  Cactus.expect(selector).toHavePadding("10px");
//  Cactus.expect(selector).toHaveBorderWidth("1px");
//}
//
//function test_large_font(selector) {
//  Cactus.expect(selector, "font-size").toEqual("20px");
//}
//
//test_round_box(".alert");
//test_large_font(".alert p");
//Cactus.expect(".alert").toHaveBorderColor("#FF0000");
//Cactus.expect(".alert", "background-color").toHaveColor("#FFCCCC");
//
//test_round_box(".notice");
//test_large_font(".notice p");
//Cactus.expect(".notice").toHaveBorderColor("#008000");
//Cactus.expect(".notice", "background-color").toHaveColor("#4DFF4D");

