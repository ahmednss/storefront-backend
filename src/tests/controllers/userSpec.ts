import {
	create,
	destroy,
	index,
	show,
	update,
	authenticate,
} from '../../controllers/user';

describe('User Handler', () => {
	it('should have a create method', () => {
		expect(create).toBeDefined();
	});
	it('should have a destroy method', () => {
		expect(destroy).toBeDefined();
	});
	it('should have an index method', () => {
		expect(index).toBeDefined();
	});
	it('should have a show method', () => {
		expect(show).toBeDefined();
	});
	it('should have an update method', () => {
		expect(update).toBeDefined();
	});
	it('should have an authenticate method', () => {
		expect(authenticate).toBeDefined();
	});
});