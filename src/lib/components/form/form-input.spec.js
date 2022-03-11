import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";

import SvInput from "./form-input.svelte";

describe("Input field test", () => {
    test("render email input", () => {
        const utils = render(SvInput, {
            name: "email-input",
            label: "Email",
            rest: { type: "email" },
        });
        const inputEl = utils.getByTestId("email-input");
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type", "email");
    });

    it("render number input", () => {
        const utils = render(SvInput, {
            name: "number-input",
            label: "Number Text",
            rest: { type: "number" },
        });
        const inputEl = utils.getByTestId("number-input");
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type", "number");
    });

    it("render text input", () => {
        const utils = render(SvInput, {
            name: "text-input",
            label: "Hello Text",
            rest: { type: "text" },
        });
        const inputEl = utils.getByTestId("text-input");
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type", "text");
        expect(inputEl).toHaveAttribute("name", "text-input");
        expect(inputEl).toHaveAttribute("id", "text-input");
    
        //Input value change test
        const messageText = "Hello Message";
        userEvent.type(inputEl, "Hello Message");
        expect(inputEl).toHaveValue(messageText);
        expect(utils.getByDisplayValue(messageText)).toBeInTheDocument();
    });
    
    it("maximum length of text field", () => {
        const utils = render(SvInput, {
            name: "text-input",
            label: "Hello Text",
            rest: { type: "text", maxlength: 4, minlength: 2 },
        });
    
        const inputEl = utils.getByTestId("text-input");
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type", "text");
        expect(inputEl).toHaveAttribute("name", "text-input");
        expect(inputEl).toHaveAttribute("id", "text-input");
        expect(inputEl).toHaveAttribute("maxlength", "4");
        expect(inputEl).toHaveAttribute("minlength", "2");
    
        //Input value change test
        const messageText = "Hello Message";
        userEvent.type(inputEl, messageText);
        expect(inputEl).toHaveValue(messageText.substring(0, 4));
        expect(
            utils.getByDisplayValue(messageText.substring(0, 4))
        ).toBeInTheDocument();
    });

    it("It should keep the same value of the input", () => {
        const utils = render(SvInput, {
            name: "text-input",
            label: "Hello Text",
            rest: { type: "number" },
        });
        const inputEl = utils.getByTestId("text-input");
        fireEvent.change(inputEl, { target: { value: "23" } });
        expect(inputEl).toHaveValue(23);
    
        fireEvent.change(inputEl, {target: {value: ''}})
        expect(inputEl).toHaveValue(null);
    });
    
    it("It should not allow letters to be inputted for number type", () => {
        const utils = render(SvInput, {
            name: "text-input",
            label: "Hello Text",
            rest: { type: "number" },
        });
        const inputEl = utils.getByTestId("text-input");
        expect(inputEl).toHaveValue(null); // empty before
        fireEvent.change(inputEl, { target: { value: "Good Day" } });
        expect(inputEl).toHaveValue(null); //empty after
    });

    it("should be disabled", () => {
        const utils = render(SvInput, {
            name: "text-input",
            label: "Hello Text",
            disabled: true
        });
        const inputEl = utils.getByTestId("text-input");
        expect(inputEl).toBeDisabled();
    });    
});
