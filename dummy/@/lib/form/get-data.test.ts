import {describe, expect, it} from 'vitest';
import {getFormData} from './get-data'

describe('getFormData', () => {
	it('should return form data as JSON', () => {
		expect(getFormData()).toBe(JSON);
	})
})
