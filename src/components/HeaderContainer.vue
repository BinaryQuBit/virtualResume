<template>
    <div class="bg">
        <div class="container">
            <div class="imageBox">
                <img src="../assets/myImage.jpeg" class="myImage">
            </div>
            <div class="profileBox">
                <div class="titleBox">
                    AMAN PADDA
                </div>
                <div class="descriptionBox">
                    Final Semester of a Bachelor's in Software Engineering,
                </div>
                <div class="descriptionBox">
                    with an expected graduation date of
                </div>
                <div class="descriptionBox">
                    August 2024
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.bg {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 120vh;
    background-image: url("../assets/headerImage.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: 30vh;
}

@media (max-width: 1024px) {
    .container {
        flex-direction: column;

    }

    .profileBox {
        width: 100%;
        text-align: center;
        margin-right: 10px;
        margin-left: 10px;

    }

    .imageBox {
        text-align: center;
        margin-right: 10px;
        margin-left: 10px;

    }

    .myImage {
        display: block;
        margin: 0 auto;
        max-width: 200px;
        max-height: 200px;
    }
}

.imageBox {
    width: 250px;
    margin-right: 10px;
}

.profileBox {
    margin-left: 10px;
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
</style>
