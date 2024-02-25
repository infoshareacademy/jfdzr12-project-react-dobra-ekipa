import {describe, expect, it, vi} from 'vitest';
import {FormEvent} from 'react'
import {signIn, SignInForm} from './sign-in'
import {render, screen, fireEvent} from '@testing-library/react';
import {getFormData} from '../form/get-data';

describe('SignInForm', () => {
	const { baseElement } = render(<SignInForm />);
	it('should display email input', () => {
		const email = baseElement.querySelector('#email');
		expect(email).toBeTruthy();
	})
	it('should display password input', () => {
		const password = baseElement.querySelector('#password');
		expect(password).toBeTruthy();
	})
	it('should display sign in button', () => {
		const buttonSubmit = baseElement.querySelector('#button-submit');
		expect(buttonSubmit).toBeTruthy();
	})

	it('should be submitted with email and password', async() => {
		const onSubmit = vi.fn((event: FormEvent<HTMLFormElement>) => getFormData(event.currentTarget))

		render(<SignInForm onSubmit={onSubmit}/>)
		const button = screen.getByText("Sign in");
		fireEvent.click(button);

		await waitFor(() => {
			expect(onSubmit).toHaveBeenCalled();
		  });
	})
})

describe('signIn', () => {
	const { debug } =  render(<SignInForm />);
	it('should return `wrong email` error', () => {
		const email = screen.getByLabelText('Email');
		fireEvent.change(email, { target: { value: 'niepoprawny email' } });
		expect(screen.getByText('Niepoprawny email')).toBeVisible();
	})
	it('should return `invalid password` error', () => {
		const password = screen.getByLabelText('Password');
		fireEvent.change(password, { target: { value: 'a' } })
		expect(screen.getByText('Niepoprawny email')).toBeVisible();
	})
	it('should authenticate user', async() => {
		const onSuccesSpy = vi.fn();
		const onFailSpy = vi.fn();
  
		render(<SignInForm onSuccess={onSuccesSpy} onFail={onFailSpy}/>);
		const email = screen.getByLabelText('Email');
		const password = screen.getByLabelText('Password');
		const button = screen.getByText("Sign In");
		const loginSpy = jest.spyOn(api, 'login').mockResolvedValueOnce('oki');
  
		// when
		fireEvent.change(email, { target: { value: 'mariuszkowalski@onet.pl' } });
		fireEvent.change(password, { target: { value: 'Mariusz1234!' } })
		fireEvent.click(button);
  
		await waitFor(() => {
		  expect(onSuccesSpy).toHaveBeenCalled();
		  expect(onFailSpy).not.toHaveBeenCalled();
		});
		
		// then
		expect(loginSpy).toHaveBeenCalled();
	})
})
