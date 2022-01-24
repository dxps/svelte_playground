/**
 * @jest-environment jsdom
 */

import SignUpPage from './SignUpPage.svelte'
import { render, screen } from '@testing-library/svelte'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

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

        it("enables the button when password fields have the same value",
            async () => {
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

        it("sends sign up form fields to backend after clicking the button",
            async () => {

                let reqBody;
                const server = setupServer(
                    rest.post("/api/1.0/users", (req, res, ctx) => {
                        reqBody = req.body
                        return res(ctx.status(200))
                    })
                )
                server.listen()

                render(SignUpPage)
                const usernameInput = screen.getByLabelText("Username")
                const emailInput = screen.getByLabelText("Email")
                const passwordInput = screen.getByLabelText("Password")
                const passwordRepeatInput = screen.getByLabelText("Password Repeat")
                await userEvent.type(usernameInput, "user1")
                await userEvent.type(emailInput, "user1@mail.com")
                await userEvent.type(passwordInput, "P455word")
                await userEvent.type(passwordRepeatInput, "P455word")
                const button = screen.getByRole('button', { name: 'Sign Up' })

                // const mockFn = jest.fn()
                // axios.post = mockFn

                await userEvent.click(button)

                // const firstCall = mockFn.mock.calls[0] // Getting the first call done through Axios.
                // const body = firstCall[1] // axios.post() has two params: url, and payload/body.

                // As a workaround to have the request processed,
                // thus properly capturing the reqBody.
                server.close()

                expect(reqBody).toEqual({
                    username: 'user1',
                    email: 'user1@mail.com',
                    password: 'P455word'
                })
            })

    })

})


