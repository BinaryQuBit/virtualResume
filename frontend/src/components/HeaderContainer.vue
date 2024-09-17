<template>
    <div class="bg">
        <div class="container">
            <div class="imageBox">
                <img src="../assets/myImage.png" class="myImage">
            </div>
            <div class="profileBox">
                <div class="titleBox">
                    AMAN PADDA
                </div>
                <div class="descriptionBox">
                    Bachelor's in Software Engineering
                </div>
            </div>
        </div>
        <div class="aboutmeContainer">
            Aman Padda, an engineering student specializing in Deep Machine Learning, combines a passion for technology
            with a commitment to advancing the field. Known for his rigorous analytical skills and creative
            problem-solving, Aman excels in collaborative environments and is recognized for his effective
            communication. He actively participates in volunteer work, enhancing his professional network and community
            engagement. In his leisure time, Aman pursues innovative projects that apply AI to real-world challenges,
            demonstrating his dedication to impactful technology.
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.bg {
    display: block;
    align-items: center;
    min-height: 120vh;
    background-image: url("../assets/headerImage.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

@media only screen and (max-width: 1024px) {
    .bg {
        background-attachment: scroll;
    }
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    overflow-x: hidden;
    padding-top: 150px;
    padding-bottom: 50px;
    max-width: 100%;
}

.imageBox {
    width: 250px;
    margin-right: 10px;
    animation: slideInFromLeft 1s ease-out forwards;
}

.profileBox {
    margin-left: 10px;
    animation: slideInFromRight 1s ease-out forwards;
}

.titleBox {
    color: white;
    font-size: 42px;
    font-family: "Lora", serif;
    font-weight: 800;
}

.descriptionBox {
    color: white;
    font-size: 21px;
    font-family: "Lora", serif;
    font-weight: 500;
}

.myImage {
    border-radius: 50%;
    width: 250px;
    height: 250px;
    object-fit: cover;
}

.aboutmeContainer {
    color: white;
    font-size: 18px;
    font-family: "Lora", serif;
    font-weight: 100;
    font-style: italic;
    width: 100%;
    text-align: center;
    padding-left: 40px;
    padding-right: 40px;
    animation: slideInFromBottom 1s ease-out forwards;
}

@media (max-width: 1000px) {
    .container {
        flex-direction: column;
    }

    .profileBox {
        padding-top: 10px;
        text-align: center;
        animation: slideInFromRight 1s ease-out forwards;
        margin: 0;
    }

    .imageBox {
        margin: 0px;
        animation: slideInFromLeft 1s ease-out forwards;
    }

    .myImage {
        margin: 0 auto;
        max-width: 150px;
        max-height: 150px;
    }
}

@media (max-width: 600px) {
    .aboutmeContainer {
        font-size: 14px;
    }

    .titleBox {
        font-size: 34px;
    }

    .descriptionBox {
        font-size: 14px;
    }
}

@keyframes slideInFromLeft {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideInFromRight {
    0% {
        transform: translateX(100%);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideInFromBottom {
    0% {
        transform: translateY(100%);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>
