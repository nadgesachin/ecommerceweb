import React from 'react';

const EcommerceTemplate = () => {
  return (
    <div>
      <h2>E-commerce Website Template</h2>
      <div className="template-wrapper" style={{ border: '1px solid #ddd', padding: '20px', margin: '20px 0' }}>
        <iframe
          srcDoc={`<!DOCTYPE html>
                    <html lang="en">
                    <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>E-commerce Website Template</title>
                      <style>
                        body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
                        header { background-color: #333; color: white; padding: 15px 0; text-align: center; }
                        header h1 { margin: 0; }
                        .product-grid { display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px; }
                        .product { background-color: white; border: 1px solid #ddd; border-radius: 5px; margin: 10px; width: 250px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); }
                        .product img { width: 100%; border-bottom: 1px solid #ddd; border-top-left-radius: 5px; border-top-right-radius: 5px; }
                        .product h2 { font-size: 18px; margin: 15px; }
                        .product p { margin: 15px; color: #777; }
                        .product .price { font-size: 22px; margin: 15px; color: #333; }
                        .product .btn { display: block; text-align: center; background-color: #28a745; color: white; padding: 10px; margin: 15px; text-decoration: none; border-radius: 5px; }
                        .product .btn:hover { background-color: #218838; }
                        footer { background-color: #333; color: white; text-align: center; padding: 15px 0; margin-top: 20px; }
                        footer p { margin: 0; }
                      </style>
                    </head>
                    <body>
                      <header>
                        <h1>My E-commerce Store</h1>
                      </header>
                      <div class="product-grid">
                        <div class="product">
                          <img src="https://via.placeholder.com/250x150" alt="Product 1">
                          <h2>Product Name 1</h2>
                          <p>A short description of the product.</p>
                          <div class="price">$49.99</div>
                          <a href="#" class="btn">Add to Cart</a>
                        </div>
                        <div class="product">
                          <img src="https://via.placeholder.com/250x150" alt="Product 2">
                          <h2>Product Name 2</h2>
                          <p>A short description of the product.</p>
                          <div class="price">$59.99</div>
                          <a href="#" class="btn">Add to Cart</a>
                        </div>
                        <div class="product">
                          <img src="https://via.placeholder.com/250x150" alt="Product 3">
                          <h2>Product Name 3</h2>
                          <p>A short description of the product.</p>
                          <div class="price">$39.99</div>
                          <a href="#" class="btn">Add to Cart</a>
                        </div>
                      </div>
                      <footer>
                        <p>&copy; 2024 My E-commerce Store. All Rights Reserved.</p>
                      </footer>
                    </body>
                    </html>`}
          width="100%"
          height="800px"
          title="E-commerce Template"
          style={{ border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
};

export default EcommerceTemplate;
