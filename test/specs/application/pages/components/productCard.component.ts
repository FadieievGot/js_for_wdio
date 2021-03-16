export class ProductCardComponent {
    constructor(private root: WebdriverIO.Element) {

    }

    title(): string {
        return this.root.$('h4').getText();
    }

    addToCart() {
        const addToCartButton = this.root.$('button[onclick*="cart.add"] i.fa-shopping-cart');
        expect(addToCartButton).toBeVisible({ message: 'Expected add to cart button to be visible' });
        addToCartButton.click();
        browser.pause(500);
    }

    addToWishList() {
        throw new Error('Not yet implemented');
    }

    compareThisProduct() {
        const addToСompareButton = this.root.$('button[onclick*="compare.add"] i.fa-exchange ');
        expect(addToСompareButton).toBeVisible({ message: 'Expected add to cart button to be visible' });
        addToСompareButton.click();
        browser.pause(500);
    }
}