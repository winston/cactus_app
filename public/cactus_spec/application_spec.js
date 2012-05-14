//////////
// .alert

//// round box
Cactus.expect(".alert", "margin" ).toEqual("10px 0px");
Cactus.expect(".alert", "padding").toEqual("10px");
Cactus.expect(".alert", "border-width").toEqual("1px");
Cactus.expect(".alert", "border-radius").toEqual("10px");

//// colors
Cactus.expect(".alert", "border-color").toHaveColor("#FF0000");
Cactus.expect(".alert", "background-color").toHaveColor("#FFCCCC");

//// font
Cactus.expect(".alert p", "font-size").toEqual("20px");

//////////
// .notice

//// round box
Cactus.expect(".notice", "margin" ).toEqual("10px 0px");
Cactus.expect(".notice", "padding").toEqual("10px");
Cactus.expect(".notice", "border-width").toEqual("1px");
Cactus.expect(".notice", "border-radius").toEqual("10px");

//// box colors
Cactus.expect(".notice", "border-color").toHaveColor("#008000");
Cactus.expect(".notice", "background-color").toHaveColor("#4DFF4D");

//// font
Cactus.expect(".notice p", "font-size").toEqual("20px");










//////////
//// Refactored
//
//function test_round_box(selector) {
//  Cactus.expect(selector, "margin" ).toEqual("10px 0px");
//  Cactus.expect(selector, "padding").toEqual("10px");
//  Cactus.expect(selector, "border-width").toEqual("1px");
//  Cactus.expect(selector, "border-radius").toEqual("10px");
//}
//
//function test_large_font(selector) {
//  Cactus.expect(selector, "font-size").toEqual("20px");
//}
//
//test_round_box(".alert");
//test_large_font(".alert p");
//Cactus.expect(".alert", "border-color").toHaveColor("#FF0000");
//Cactus.expect(".alert", "background-color").toHaveColor("#FFCCCC");
//
//test_round_box(".notice");
//test_large_font(".notice p");
//Cactus.expect(".notice", "border-color").toHaveColor("#008000");
//Cactus.expect(".notice", "background-color").toHaveColor("#4DFF4D");

