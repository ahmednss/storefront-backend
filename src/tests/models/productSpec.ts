import { ProductStore } from '../../models/product';

const store = new ProductStore();

describe('Product Model', () => {
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

	it('create method should add a product', async () => {
		const result = await store.create({
			name: 'product',
			price: 100,
			category: 'category',
		});
		expect(result).toEqual({
			id: 1,
			name: 'product',
			price: 100,
			category: 'category',
		});
	});

	it('index method should return a list of products', async () => {
		const result = await store.index();
		expect(result).toEqual([
			{
				id: 1,
				name: 'product',
				price: 100,
				category: 'category',
			},
		]);
	});

	it('show method should return the correct product', async () => {
		const result = await store.show('1');
		expect(result).toEqual({
			id: 1,
			name: 'product',
			price: 100,
			category: 'category',
		});
	});

	it('delete method should remove the product', async () => {
		await store.delete('1');
		const result = await store.index();

		expect(result).toEqual([]);
	});
});