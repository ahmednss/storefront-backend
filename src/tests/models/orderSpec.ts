import { OrderStore } from '../../models/order';

const store = new OrderStore();

describe('Order Model', () => {
	it('should have an index method', () => {
		expect(store.index).toBeDefined();
	});

	it('should have a show method', () => {
		expect(store.index).toBeDefined();
	});

	it('should have a create method', () => {
		expect(store.index).toBeDefined();
	});

	it('should have a update method', () => {
		expect(store.index).toBeDefined();
	});

	it('should have a delete method', () => {
		expect(store.index).toBeDefined();
	});

	it('create method should add a order', async () => {
		const result = await store.create({
			product_id: 1,
			quantity: 5,
			user_id: 2,
			status: 'active',
		});
		expect(result).toEqual({
			id: 1,
			product_id: 1,
			quantity: 5,
			user_id: 2,
			status: 'active',
		});
	});

	it('index method should return a list of orders', async () => {
		const result = await store.index();
		expect(result).toEqual([
			{
				id: 1,
				product_id: 1,
				quantity: 5,
				user_id: 2,
				status: 'active',
			},
		]);
	});

	it('show method should return the correct order', async () => {
		const result = await store.show('1');
		expect(result).toEqual({
			id: 1,
			product_id: 1,
			quantity: 5,
			user_id: 2,
			status: 'active',
		});
	});

	it('delete method should remove the order', async () => {
		await store.delete('1');
		const result = await store.index();

		expect(result).toEqual([]);
	});
});
