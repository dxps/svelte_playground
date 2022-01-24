/**
 * @jest-environment jsdom
 */

import SignUpPage from './SignUpPage.svelte'
import { render, screen } from '@testing-library/svelte'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe("Sign Up Page", () => {

    it('has Sign Up header', () => {
        render(SignUpPage)
        const header = screen.getByRole('heading', { name: 'Sign Up' })
        expect(header).toBeInTheDocument()
    })

    it('has username input', () => {
        const { container } = render(SignUpPage)
        // Using 'screen' feature instead of DOM's querySelector.
        // const input = container.querySelector("input")
        const input = screen.getByLabelText("Username")
        expect(input).toBeInTheDocument()
    })

    it('has email input', () => {
        const { container } = render(SignUpPage)
        const input = screen.getByLabelText("Email")
        expect(input).toBeInTheDocument()
    })

    it('has password input', () => {
        const { container } = render(SignUpPage)
        const input = screen.getByLabelText("Password")
        expect(input).toBeInTheDocument()
    })

    it('has password input with type password', () => {
        const { container } = render(SignUpPage)
        const input = screen.getByLabelText("Password")
        expect(input.type).toBe("password")
    })

    it('has password repeat input', () => {
        const { container } = render(SignUpPage)
        const input = screen.getByLabelText("Password Repeat")
        expect(input).toBeInTheDocument()
    })

    it('has password repeat input with type password', () => {
        const { container } = render(SignUpPage)
        const input = screen.getByLabelText("Password Repeat")
        expect(input.type).toBe("password")
    })

    it('has Sign Up button', () => {
        render(SignUpPage)
        const button = screen.getByRole('button', { name: 'Sign Up' })
        expect(button).toBeInTheDocument()
    })

    it('has Sign Up button as disabled initially', () => {
        render(SignUpPage)
        const button = screen.getByRole('button', { name: 'Sign Up' })
        expect(button).toBeDisabled()
    })

    describe("Interactions", () => {

        it("enables the button when password fields have the same value", async () => {
            render(SignUpPage)
            const passwordInput = screen.getByLabelText("Password")
            const passwordRepeatInput = screen.getByLabelText("Password Repeat")
            // Note: Keep this 'await', even though you might get this hint from your tooling:
            // 'await' has no effect on the type of this expression.ts(80007)
            await userEvent.type(passwordInput, "P455word")
            await userEvent.type(passwordRepeatInput, "P455word")
            const button = screen.getByRole('button', { name: 'Sign Up' })
            expect(button).toBeEnabled()
        })

    })

})


