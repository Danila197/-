import Choices from "choices.js";

export const choicesController = () => {
    const option = {
        searchEnabled: false,
        shouldSort: false,
        itemSelectText: '',
        className: {
        }
    };

    new Choices('.form__select_category', {
        ...option, classNames: {
            containerOuter: 'choices form__select_category',
        }
    });
    new Choices('.form__select_price', {
        ...option, classNames: {
            containerOuter: 'choices form__select_price',
        }
    });
}