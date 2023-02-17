import React from "react";
import {act, create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

//It isn't work
describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        let component;
        act(() => {
            component = create(<ProfileStatus status={"Status go to the state"} />);
        });
        const instance = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        const span = instance.findByType("span")
        act(() => {
            expect(span.length).toBe(1);
        });
    });
});


// describe("Button component", () => {
//     test("it shows the expected text when clicked", () => {
//         let component;
//         act(() => {
//             component = create(<Button text="SUBSCRIBE TO BASIC" />);
//         });
//         const instance = component.root;
//         const button = instance.findByType("button");
//         act(() => button.props.onClick());
//         expect(button.props.children).toBe("PROCEED TO CHECKOUT");
//     });
// });