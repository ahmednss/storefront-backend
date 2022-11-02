CREATE TABLE Orders(
    id SERIAL PRIMARY KEY,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    status VARCHAR(20) NOT NULL
);
ALTER TABLE Orders
    ADD CONSTRAINT fk_orders_users FOREIGN KEY (user_id) REFERENCES Users(id);