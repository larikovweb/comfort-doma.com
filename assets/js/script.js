`use strict`
document.addEventListener("DOMContentLoaded", () => {
    new WOW().init();
    [].forEach.call(document.querySelectorAll('.tel'), function (input) {
        var keyCode;

        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___-__-__",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i);
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}";
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) this.value = "";
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false);

    });

    //HEADER

    const body = document.querySelector('body'),
        header = document.querySelector('header');


    window.addEventListener('scroll', () => {

        if (window.pageYOffset >= 10) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    });


    const headerBurger = document.querySelector('.header__burger'),
        headerMenu = document.querySelector('.header-mobile'),
        headerMobileLinks = document.querySelectorAll('.header-mobile a');


    headerBurger.addEventListener('click', () => {


        if (!(headerBurger.classList.contains('active'))) {
            header.classList.add('open');
            headerBurger.classList.add('active');
            headerMenu.classList.add('active');
            body.classList.add('hidden');
        } else {
            header.classList.remove('popups');
            header.classList.remove('open');
            headerBurger.classList.remove('active');
            headerMenu.classList.remove('active');
            body.classList.remove('hidden');
        }


        for (let i = 0; i < popups.length; i++) {
            popups[i].classList.remove('active')
        }


    });
    headerMobileLinks.forEach(item => {
        item.addEventListener('click', () => {
            header.classList.remove('active');
            header.classList.remove('open');
            header.classList.remove('popups');
            headerBurger.classList.remove('active');
            headerMenu.classList.remove('active');
            body.classList.remove('hidden');
        });
    });


    //ANCHOR

    const anchors = document.querySelectorAll('.scroll');
    if (anchors[0]) {
        for (let anchor of anchors) {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();

                const blockID = anchor.getAttribute('href').substr(1);

                document.getElementById(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            });
        }
    }


    //MOBILE

    const readBtn = document.querySelectorAll('.feedback__read'),
        readTextOne = document.querySelectorAll('.feedback__mobile.one'),
        readTextTwo = document.querySelectorAll('.feedback__mobile.two');
    if (readBtn[0]) {
        readBtn.forEach((item, i) => {
            readBtn[i].addEventListener('click', () => {
                if (i === 0) {
                    item.style.display = 'none';
                    readTextOne[0].style.display = 'block';
                    readTextOne[1].style.display = 'block';
                } else {
                    item.style.display = 'none';
                    readTextTwo[0].style.display = 'block';
                    readTextTwo[1].style.display = 'block';
                }
            });
        });
    }



    //POPUPS


    const popupBtns = document.querySelectorAll('.popup-btn'),
        popups = document.querySelectorAll('.popup'),
        popupConsultation = document.querySelector('.popup.consultation'),
        popupSend = document.querySelector('.popup.send');


    popupBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            for (let i = 0; i < popups.length; i++) {
                popups[i].classList.remove('active');
            }
            body.classList.add('hidden');
            headerBurger.classList.add('active');
            header.classList.add('open');
            header.classList.add('popups');
            if (btn.classList.contains('consultation')) {
                popupConsultation.classList.add('active');
            } else if (btn.classList.contains('send')) {
                popupSend.classList.add('active');
            } else if (btn.classList.contains('one')) {
                document.querySelector('.popup-portfolio.one').classList.add('active');
            } else if (btn.classList.contains('two')) {
                document.querySelector('.popup-portfolio.two').classList.add('active');
            } else if (btn.classList.contains('three')) {
                document.querySelector('.popup-portfolio.three').classList.add('active');
            } else if (btn.classList.contains('politics')) {
                document.querySelector('.popup.politics').classList.add('active');
            } else if (btn.classList.contains('quiz')) {
                document.querySelector('.popup.quiz').classList.add('active');
            } else if (btn.classList.contains('privacy')) {
                document.querySelector('.popup.privacy').classList.add('active');
            } else if (btn.classList.contains('prices')) {
                document.querySelector('.popup.prices').classList.add('active');
            }
            if (headerMenu.classList.contains('active')) {
                headerMenu.classList.remove('active');
            }
        });
    });

    popups.forEach(item => {
        item.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains('popup')) {
                item.classList.remove('active');
                body.classList.remove('hidden');
            }
            if (target.classList.contains('popup-content__close')) {
                item.classList.remove('active');
                body.classList.remove('hidden');
            }
        });
    });


    //SWIPER

    const swiperSlider = document.querySelector('.swiper1');

    if (swiperSlider) {
        const swiper1 = new Swiper('.swiper1', {
            direction: 'horizontal',
            loop: true,
            freeMode: true,
            speed: 500,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {

                300: {
                    slidesPerView: 1.11,
                    spaceBetween: 20,
                    loop: false,
                },

                480: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                }
            }
        });

        var swiper2 = new Swiper(".mySwiper", {
            freeMode: false,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {

                260: {
                    slidesPerView: 1.2,
            centeredSlides: false,
            initialSlide: 1,
            loop: false,
            spaceBetween: 20,
            freeMode: true,
            
                },
                480: {
                    slidesPerView: 3,
            centeredSlides: true,
            initialSlide: 2,
            loop: true,
            spaceBetween: 88,
                }

            }
        });
    }


    // Show File Name

    const inputFile = document.querySelector('#file-1'),
        fileName = document.querySelector('.form-file__name.one'),
        inputFile2 = document.querySelector('#file-2'),
        fileName2 = document.querySelector('.form-file__name.two'),
        fileName3 = document.querySelector('.form-file__name.three');


    if (inputFile) {
        inputFile.onchange = function () {

                fileName.innerHTML += `
                <div><span>Прикреплен:</span> ${this.file.name}</div>
                `;
            
        };
    }
    if (inputFile2) {
        inputFile2.onchange = function () {
            for (let i = 0; i <= 3; i++) {
                fileName2.innerHTML += `
                <div><span>Прикреплен:</span> ${this.files[i].name}</div>
                `;
                fileName3.innerHTML += `
                <div><span>Прикреплен:</span> ${this.files[i].name}</div>
                `;
            }
        };
    }

    const calcArrowNext = document.querySelector('.calc-slide__arrows .next'),
        calcArrowPrev = document.querySelector('.calc-slide__arrows .prev'),
        calcSlideMain = document.querySelectorAll('.calc-slide__wrapper'),
        calcSlideInfo = document.querySelectorAll('.calc-info__descr'),
        calcStep = document.querySelector('.calc-slide__steps .count'),
        calcProgressItems = document.querySelectorAll('.calc-slide__progress span'),
        calcSlideHead = document.querySelector('.calc-slide__head'),
        calcHeads = [
            `Выберите сезонность проживания`,
            `Суммарная площадь дома`,
            `Какой вид топлива <span class="desktop">будем</span> использовать?`,
            `Чем <span class="desktop">будем</span> комплектовать систему?`,
            `<span class="desktop">Из какого материала сделаны внешние стены в доме?</span><span class="mobile">Из чего сделаны внешние стены?</span>`,
            `<span class="desktop">Наш специалист уже получил ваши данные <br> и приступил к предварительному просчету сметы</span><span class="mobile">Мы уже приступили к расчету цены</span>`
        ];

    let slideIndex = 0;

    const hiddenPrevArrow = () => {

        if (slideIndex === 0) {
            calcArrowPrev.style.opacity = 0;
            calcArrowPrev.style.cursor = 'default';
        } else {
            calcArrowPrev.style.opacity = 1;
            calcArrowPrev.style.cursor = 'pointer';
        }
    };

    if (calcArrowNext) {
        // Cтоимость
        const checkboxItemsOne = calcSlideMain[0].querySelectorAll('.item__checkbox');

        const calcSum = () => {

            if (checkboxItemsOne[0].checked) {
                calcProgressItems[2].classList.add('hidden');
                calcProgressItems[3].classList.add('hidden');
                document.querySelector('.calc_static').innerHTML = "3";
                document.querySelector('.calc-slide__progress').classList.add('step');

            } else {
                document.querySelector('.calc_static').innerHTML = "5";
                calcProgressItems[2].classList.remove('hidden');
                calcProgressItems[3].classList.remove('hidden');
                document.querySelector('.calc-slide__progress').classList.remove('step');
            }

        };

        const finalBg = () => {
            if (document.querySelector('.calc-slide').classList.contains('final')) {
                document.querySelector('.calc__wrapper').classList.add('final');
                calcSlideHead.innerHTML = calcHeads[5];
            } else {
                document.querySelector('.calc__wrapper').classList.remove('final');
                calcSlideHead.innerHTML = calcHeads[slideIndex];
            }

        }

        const hiddenMobileDescr = () => {
            if (window.innerWidth < 460) {
                calcSlideInfo.forEach(item => {
                    item.classList.remove('active');
                });
                // document.querySelector('.calc-info__mobile').style.opacity = 1;
            }
        };

        hiddenPrevArrow();
        hiddenMobileDescr();
        // Calc Navigation

        calcArrowNext.addEventListener('click', () => {

            if (calcArrowNext.classList.contains('active')) {


                // Слайд вперед 1 из 6
                if (!(checkboxItemsOne[0].checked) && slideIndex < 5) {
                    slideIndex++;

                    for (let i = 0; i < calcSlideInfo.length; i++) {
                        calcSlideMain[i].classList.remove('active');
                        calcSlideInfo[i].classList.remove('active');
                    }
                    if (slideIndex !== 5) {
                        calcProgressItems[slideIndex].classList.add('active');
                        calcSlideMain[slideIndex].classList.add('active');
                        calcSlideInfo[slideIndex].classList.add('active');
                        calcSlideHead.innerHTML = calcHeads[slideIndex];
                        calcStep.innerHTML = slideIndex + 1;
                        hiddenPrevArrow();
                    }

                }

                // Слайд вперед 1 из 4

                if (checkboxItemsOne[0].checked && slideIndex < 5) {

                    if (calcSlideMain[1].classList.contains('active')) {
                        slideIndex = 4;
                        calcStep.innerHTML = 3;
                    }

                    if (calcSlideMain[4].classList.contains('active')) {
                        slideIndex++;
                        calcStep.innerHTML = 'Почти готово!';
                    }

                    if (calcSlideMain[0].classList.contains('active')) {
                        slideIndex++;
                        calcStep.innerHTML = slideIndex + 1;
                    }

                    for (let i = 0; i < calcSlideInfo.length; i++) {
                        calcSlideMain[i].classList.remove('active');
                        calcSlideInfo[i].classList.remove('active');
                    }
                    if (slideIndex !== 5) {
                        calcProgressItems[slideIndex].classList.add('active');
                        calcSlideMain[slideIndex].classList.add('active');
                        calcSlideInfo[slideIndex].classList.add('active');
                        calcSlideHead.innerHTML = calcHeads[slideIndex];
                    }

                    hiddenPrevArrow();

                }
                // Вывод финальной формы
                if (slideIndex === 5) {
                    calcSlideMain[4].classList.remove('active');
                    calcSlideMain[5].classList.add('active');
                    document.querySelector('.calc-slide').classList.add('final');
                    document.querySelector('.calc-info').classList.add('hidden');
                }
            }

            calcArrowNext.classList.remove('active');

            let slideWrapperActive = document.querySelectorAll('.calc-slide__wrapper');
            let checkboxActive = slideWrapperActive[slideIndex].querySelectorAll('.item__checkbox');
            for (let i = 0; i < checkboxActive.length; i++) {
                if (checkboxActive[i].checked) {
                    calcArrowNext.classList.add('active');
                }
            }
            hiddenMobileDescr();
            finalBg();
        });

        calcArrowPrev.addEventListener('click', () => {


            // Активация стрелки prev
            let slideWrapperActive = document.querySelectorAll('.calc-slide__wrapper');
            let checkboxActive = slideWrapperActive[slideIndex - 1].querySelectorAll('.item__checkbox');
            for (let i = 0; i < checkboxActive.length; i++) {
                if (checkboxActive[i].checked) {
                    calcArrowNext.classList.add('active');
                }
            }

            // Стрелка prev 1 из 6
            if (!(checkboxItemsOne[0].checked) && slideIndex >= 1) {


                for (let i = 0; i < calcSlideInfo.length; i++) {
                    calcSlideMain[i].classList.remove('active');
                    calcSlideInfo[i].classList.remove('active');
                }
                if (slideIndex === 5) {
                    slideIndex--;
                    calcSlideHead.innerHTML = calcHeads[slideIndex];
                    calcStep.innerHTML = 5;
                    document.querySelector('.calc-slide').classList.remove('final');
                    calcSlideMain[5].classList.remove('active')
                    calcSlideMain[4].classList.add('active')
                    calcSlideInfo[4].classList.add('active');
                } else {
                    slideIndex--;
                    calcProgressItems[slideIndex + 1].classList.remove('active');
                    calcStep.innerHTML = slideIndex + 1;
                    calcSlideInfo[slideIndex].classList.add('active');
                    calcSlideMain[slideIndex].classList.add('active');
                    calcSlideHead.innerHTML = calcHeads[slideIndex];
                }

                hiddenPrevArrow();
            }

            // Стрелка prev 1 из 4

            if (checkboxItemsOne[0].checked && slideIndex >= 1) {

                if (calcSlideMain[4].classList.contains('active')) {
                    slideIndex = 1;
                    calcStep.innerHTML = 2;
                    calcProgressItems[4].classList.remove('active');
                }

                if (calcSlideMain[1].classList.contains('active')) {
                    slideIndex = 0;
                    calcStep.innerHTML = 1;
                }

                for (let i = 0; i < calcSlideInfo.length; i++) {
                    calcSlideMain[i].classList.remove('active');
                    calcSlideInfo[i].classList.remove('active');
                }

                if (slideIndex === 5) {
                    calcSlideInfo[4].classList.add('active');
                    calcSlideMain[4].classList.add('active');
                    calcSlideHead.innerHTML = calcHeads[4];
                    calcSlideMain[5].classList.remove('active');
                    slideIndex = 5;
                    calcStep.innerHTML = 3;
                    document.querySelector('.calc-slide').classList.remove('final');
                } else {
                    calcProgressItems[slideIndex + 1].classList.remove('active');
                    calcSlideInfo[slideIndex].classList.add('active');
                    calcSlideMain[slideIndex].classList.add('active');
                    calcSlideHead.innerHTML = calcHeads[slideIndex];
                }




                hiddenPrevArrow();

            }
            hiddenMobileDescr();


            document.querySelector('.calc__wrapper').classList.remove('final');
            document.querySelector('.calc-slide').classList.remove('final');
            document.querySelector('.calc-info').classList.remove('hidden');
        });

        setInterval(() => {
            console.log(slideIndex)
        }, 2000)
        // Calc Checkbox

        const checkboxItemAll = document.querySelectorAll('.calc .item__checkbox');

        checkboxItemAll.forEach(item => {
            item.addEventListener('click', () => {
                let slideWrapperActive = document.querySelector('.calc-slide__wrapper.active');
                let checkboxRadioActive = slideWrapperActive.querySelectorAll('.calc .item__radio');
                let checkboxActive = slideWrapperActive.querySelectorAll('.calc .item__checkbox');

                for (let i = 0; i < checkboxActive.length; i++) {
                    if (checkboxActive[i].checked) {
                        calcArrowNext.classList.add('active');
                        break;
                    }
                }
                for (let i = 0; i < checkboxRadioActive.length; i++) {
                    checkboxRadioActive[i].checked = false;
                    item.checked = true;
                }
                calcSum();
            });
        });





        document.querySelector('.calc-info__mobile').addEventListener('click', () => {
            calcSlideInfo[slideIndex].classList.add('active');
            // document.querySelector('.calc-info__mobile').style.opacity = 0;
        });

    }















    const quizArrowNext = document.querySelector('.quiz-slide__arrows .next'),
        quizArrowPrev = document.querySelector('.quiz-slide__arrows .prev'),
        quizSlideMain = document.querySelectorAll('.quiz-slide__wrapper'),
        quizSlideInfo = document.querySelectorAll('.quiz-info__descr'),
        quizStep = document.querySelector('.quiz-slide__steps .count'),
        quizProgressItems = document.querySelectorAll('.quiz-slide__progress span'),
        quizSlideHead = document.querySelector('.quiz-slide__head'),
        quizHeads = [
            `Выберите сезонность проживания`,
            `Суммарная площадь дома`,
            `Какой вид топлива <span class="desktop">будем</span> использовать?`,
            `Чем <span class="desktop">будем</span> комплектовать систему?`,
            `<span class="desktop">Из какого материала сделаны внешние стены в доме?</span><span class="mobile">Из чего сделаны внешние стены?</span>`,
            `<span class="desktop">Наш специалист уже получил ваши данные <br> и приступил к предварительному просчету сметы</span><span class="mobile">Мы уже приступили к расчету цены</span>`
        ];

    let slideIndex2 = 0;

    const hiddenPrevArrow2 = () => {

        if (slideIndex2 === 0) {
            quizArrowPrev.style.opacity = 0;
            quizArrowPrev.style.cursor = 'default';
        } else {
            quizArrowPrev.style.opacity = 1;
            quizArrowPrev.style.cursor = 'pointer';
        }
    };

    if (quizArrowNext) {
        // Cтоимость
        const checkboxItemsOne = quizSlideMain[0].querySelectorAll('.item__checkbox');

        const quizSum2 = () => {

            if (checkboxItemsOne[0].checked) {
                quizProgressItems[2].classList.add('hidden');
                quizProgressItems[3].classList.add('hidden');
                document.querySelector('.quiz_static').innerHTML = "3";
                document.querySelector('.quiz-slide__progress').classList.add('step');

            } else {
                document.querySelector('.quiz_static').innerHTML = "5";
                quizProgressItems[2].classList.remove('hidden');
                quizProgressItems[3].classList.remove('hidden');
                document.querySelector('.quiz-slide__progress').classList.remove('step');
            }

        };

        const finalBg2 = () => {
            if (document.querySelector('.quiz-slide').classList.contains('final')) {
                document.querySelector('.quiz__wrapper').classList.add('final');
                quizSlideHead.innerHTML = quizHeads[5];
            } else {
                document.querySelector('.quiz__wrapper').classList.remove('final');
                quizSlideHead.innerHTML = quizHeads[slideIndex2];
            }

        }

        const hiddenMobileDescr2 = () => {
            if (window.innerWidth < 460) {
                quizSlideInfo.forEach(item => {
                    item.classList.remove('active');
                });
                // document.querySelector('.quiz-info__mobile').style.opacity = 1;
            }
        };

        hiddenPrevArrow2();
        hiddenMobileDescr2();
        // quiz Navigation

        quizArrowNext.addEventListener('click', () => {

            if (quizArrowNext.classList.contains('active')) {


                // Слайд вперед 1 из 6
                if (!(checkboxItemsOne[0].checked) && slideIndex2 < 5) {
                    slideIndex2++;

                    for (let i = 0; i < quizSlideInfo.length; i++) {
                        quizSlideMain[i].classList.remove('active');
                        quizSlideInfo[i].classList.remove('active');
                    }
                    if (slideIndex2 !== 5) {
                        quizProgressItems[slideIndex2].classList.add('active');
                        quizSlideMain[slideIndex2].classList.add('active');
                        quizSlideInfo[slideIndex2].classList.add('active');
                        quizSlideHead.innerHTML = quizHeads[slideIndex2];
                        quizStep.innerHTML = slideIndex2 + 1;
                        hiddenPrevArrow2();
                    }

                }

                // Слайд вперед 1 из 4

                if (checkboxItemsOne[0].checked && slideIndex2 < 5) {

                    if (quizSlideMain[1].classList.contains('active')) {
                        slideIndex2 = 4;
                        quizStep.innerHTML = 3;
                    }

                    if (quizSlideMain[4].classList.contains('active')) {
                        slideIndex2++;
                        quizStep.innerHTML = 'Почти готово!';
                    }

                    if (quizSlideMain[0].classList.contains('active')) {
                        slideIndex2++;
                        quizStep.innerHTML = slideIndex2 + 1;
                    }

                    for (let i = 0; i < quizSlideInfo.length; i++) {
                        quizSlideMain[i].classList.remove('active');
                        quizSlideInfo[i].classList.remove('active');
                    }
                    if (slideIndex2 !== 5) {
                        quizProgressItems[slideIndex2].classList.add('active');
                        quizSlideMain[slideIndex2].classList.add('active');
                        quizSlideInfo[slideIndex2].classList.add('active');
                        quizSlideHead.innerHTML = quizHeads[slideIndex2];
                    }

                    hiddenPrevArrow2();

                }

                // Вывод финальной формы
                if (slideIndex2 === 5) {
                    quizSlideMain[4].classList.remove('active');
                    quizSlideMain[5].classList.add('active');
                    document.querySelector('.quiz-slide').classList.add('final');
                    document.querySelector('.quiz-info').classList.add('hidden');
                }

            }

            quizArrowNext.classList.remove('active');

            let slideWrapperActive = document.querySelectorAll('.quiz-slide__wrapper');
            let checkboxActive = slideWrapperActive[slideIndex2].querySelectorAll('.item__checkbox');
            for (let i = 0; i < checkboxActive.length; i++) {
                if (checkboxActive[i].checked) {
                    quizArrowNext.classList.add('active');
                }
            }
            hiddenMobileDescr2();
            finalBg2();
        });

        quizArrowPrev.addEventListener('click', () => {


            // Активация стрелки prev
            let slideWrapperActive = document.querySelectorAll('.quiz-slide__wrapper');
            let checkboxActive = slideWrapperActive[slideIndex2 - 1].querySelectorAll('.item__checkbox');
            for (let i = 0; i < checkboxActive.length; i++) {
                if (checkboxActive[i].checked) {
                    quizArrowNext.classList.add('active');
                }
            }

            // Стрелка prev 1 из 6
            if (!(checkboxItemsOne[0].checked) && slideIndex2 >= 1) {


                for (let i = 0; i < quizSlideInfo.length; i++) {
                    quizSlideMain[i].classList.remove('active');
                    quizSlideInfo[i].classList.remove('active');
                }
                if (slideIndex2 === 5) {
                    slideIndex2--;
                    quizSlideHead.innerHTML = quizHeads[slideIndex2];
                    quizStep.innerHTML = 5;
                    document.querySelector('.quiz-slide').classList.remove('final');
                    quizSlideMain[5].classList.remove('active')
                    quizSlideMain[4].classList.add('active')
                    quizSlideInfo[4].classList.add('active');
                } else {
                    slideIndex2--;
                    quizProgressItems[slideIndex2 + 1].classList.remove('active');
                    quizStep.innerHTML = slideIndex2 + 1;
                    quizSlideInfo[slideIndex2].classList.add('active');
                    quizSlideMain[slideIndex2].classList.add('active');
                    quizSlideHead.innerHTML = quizHeads[slideIndex2];
                }

                hiddenPrevArrow2();
            }

            // Стрелка prev 1 из 4

            if (checkboxItemsOne[0].checked && slideIndex2 >= 1) {

                if (quizSlideMain[4].classList.contains('active')) {
                    slideIndex2 = 1;
                    quizStep.innerHTML = 2;
                    quizProgressItems[4].classList.remove('active');
                }

                if (quizSlideMain[1].classList.contains('active')) {
                    slideIndex2 = 0;
                    quizStep.innerHTML = 1;
                }

                for (let i = 0; i < quizSlideInfo.length; i++) {
                    quizSlideMain[i].classList.remove('active');
                    quizSlideInfo[i].classList.remove('active');
                }

                if (slideIndex2 === 5) {
                    quizSlideInfo[4].classList.add('active');
                    quizSlideMain[4].classList.add('active');
                    quizSlideHead.innerHTML = quizHeads[4];
                    quizSlideMain[5].classList.remove('active');
                    slideIndex2 = 5;
                    quizStep.innerHTML = 3;
                    document.querySelector('.quiz-slide').classList.remove('final');
                } else {
                    quizProgressItems[slideIndex2 + 1].classList.remove('active');
                    quizSlideInfo[slideIndex2].classList.add('active');
                    quizSlideMain[slideIndex2].classList.add('active');
                    quizSlideHead.innerHTML = quizHeads[slideIndex2];
                }




                hiddenPrevArrow2();

            }
            hiddenMobileDescr2();


            document.querySelector('.quiz__wrapper').classList.remove('final');
            document.querySelector('.quiz-slide').classList.remove('final');
            document.querySelector('.quiz-info').classList.remove('hidden');
        });


        // quiz Checkbox

        const checkboxItemAll = document.querySelectorAll('.quiz .item__checkbox');

        checkboxItemAll.forEach(item => {
            item.addEventListener('click', () => {
                let slideWrapperActive = document.querySelector('.quiz-slide__wrapper.active');
                let checkboxRadioActive = slideWrapperActive.querySelectorAll('.quiz .item__radio');
                let checkboxActive = slideWrapperActive.querySelectorAll('.quiz .item__checkbox');

                for (let i = 0; i < checkboxActive.length; i++) {
                    if (checkboxActive[i].checked) {
                        quizArrowNext.classList.add('active');
                        break;
                    }
                }
                for (let i = 0; i < checkboxRadioActive.length; i++) {
                    checkboxRadioActive[i].checked = false;
                    item.checked = true;
                }
                quizSum2();
            });
        });





        document.querySelector('.quiz-info__mobile').addEventListener('click', () => {
            quizSlideInfo[slideIndex2].classList.add('active');
            // document.querySelector('.quiz-info__mobile').style.opacity = 0;
        });

    }
});