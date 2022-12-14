import { API_URL, directions } from "./const";
import { createStars } from "./createStars";
import { store } from "./store";

export const createCard = (item) => {
    const { avatar, category, comments, direction, id, name, surname, price } = item;

    const serviceItem = document.createElement('li');
    serviceItem.classList.add('services__item');

    const service = document.createElement('article');
    service.classList.add('service');
    service.dataset.id = id;

    const serviceAvatar = new Image(50, 50);
    serviceAvatar.classList.add('service__avatar');
    serviceAvatar.src = `${API_URL}/${avatar}`;
    serviceAvatar.alt = `${category} ${surname} ${name}`;

    const servicePresent = document.createElement('div')
    servicePresent.classList.add('service__present');

    const serviceTitle = document.createElement('h3');
    serviceTitle.classList.add('service__title');
    serviceTitle.textContent = store.category.find(item => item.title === category).rus;

    const serviceName = document.createElement('p');
    serviceName.classList.add('service__name');
    serviceName.textContent = `${name} ${surname[0]}.`;

    servicePresent.append(serviceTitle, serviceName);

    const servicePrice = document.createElement('p');
    servicePrice.classList.add('service__price');
    servicePrice.textContent = `${directions[direction]} ${price} ₽`;


    const serviceReview = document.createElement('div');
    serviceReview.classList.add('service__review');

    const serviceStars = document.createElement('div');
    serviceStars.classList.add('service__stars');

    const serviceCountReview = document.createElement('p');
    serviceCountReview.classList.add('service__count-review');
    serviceCountReview.textContent = comments.length.toString();

    serviceReview.append(createStars(comments), serviceCountReview);

    service.append(serviceAvatar, servicePresent, servicePrice, serviceReview);

    serviceItem.append(service)

    return serviceItem;
}


`
<li class="services__item">
    <article class="service">
        <img src="img/photo.png" alt="" class="service__avatar">
        <div class="service__present">
            <h3 class="service__title">Фотограф</h3>
            <p class="service__name">Иван П.</p>
        </div>
        <p class="service__price">от 4000 ₽</p>
        <div class="service__review">
            <div class="service__stars">
                <img src="img/star.svg" class="service__star" alt="рейтинг спциалиста 4 из 5">
                <img src="img/star.svg" class="service__star" alt="">
                <img src="img/star.svg" class="service__star" alt="">
                <img src="img/star.svg" class="service__star" alt="">
                <img src="img/star_o.svg" class="service__star" alt="">
            </div>
            <p class="service__count-review">4</p>
        </div>
    </article>
</li>
`