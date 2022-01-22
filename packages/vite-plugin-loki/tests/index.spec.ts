import { describe, it, expect } from 'vitest';
import { loki } from '../src';

describe('vite-plugin-loki', () => {
	it('should be named', function () {
		expect(loki().name).toBe('vite-plugin-loki');
	});
});
