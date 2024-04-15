<template>
    <div>
        <Header :iconSrc="'fa-solid fa-terminal'" titleText="EMPLOYMENT HISTORY" />
        <div class="margin" :class="{ 'fade-in': isVisible1 }">
            <Title :githubIcon="'fa-brands fa-github'" :demoIcon="'fa-solid fa-display'" :githubLink="skcdaGithubUrl"
                :demoLink="skcdaDemoUrl" employer="Full Stack Developer" location="SKCDA, Regina, SK"
                date="May 2023 - Aug 2023" />
            <Description
                list="Spearheaded the development and launch of a dynamic WordPress website, employing Agile methodologies to ensure project flexibility and responsiveness to feedback" />
            <Description
                list="Implemented a fast feedback cycle, enabling continuous improvement and rapid iteration of the website based on user input and stakeholder reviews" />
            <Description
                list="Utilized WordPress as the primary platform, leveraging its flexibility and extensive plugin ecosystem to build a tailored, dynamic website solution" />
            <Description list="Technologies used: WordPress, JavaScript, Figma, StoriesOnboard, GreenGeeks" isStar />
        </div>
        <div class="margin" :class="{ 'fade-in': isVisible2 }">
            <Title :githubIcon="'fa-brands fa-github'" :githubLink="codeGeneratorUrl" employer="Research Assistant"
                location="University of Regina" date="July 2023 - Aug 2023" />
            <Description
                list=" Collaborated with a PhD student to scrape and preprocess erroneous code samples from chat-based platforms, creating a robust dataset for training a machine learning model" />
            <Description
                list="Supported the development of an innovative machine learning model designed to identify and categorize syntax and semantic errors in code, enhancing traditional error detection methods beyond standard compiler diagnostics" />
            <Description
                list="Contributed to a pioneering approach in error detection by training a machine learning model that successfully identifies various code errors, offering a more efficient alternative to conventional compiler-based error analysis" />
            <Description list="Technologies used: Node.js, JavaScript" isStar />
        </div>
        <div class="margin" :class="{ 'fade-in': isVisible3 }">
            <Title employer="IT Operations Intern" location="SGI, Saskatoon, SK" date="Jan 2022 – Aug 2022" />
            <Description
                list="Proactively resolved daily incidents and requests, enhancing system reliability and user satisfaction across various IT environments" />
            <Description
                list="Administered dynamic and static groups for users and devices in Azure cloud, and monitored access to licenses and applications, ensuring optimal deployment and compliance with usage policies" />
            <Description
                list="Led the successful transformation of MDM profiles from JAMF to Azure, and resolved a critical, widespread issue affecting multiple devices, documented procedures that improved future troubleshooting efforts" />
            <Description list="Technologies used: Azure, PuTTY, SNOW" isStar />
        </div>
        <div class="margin" :class="{ 'fade-in': isVisible4 }">
            <Title employer="Asset Manager/Sales Associate" location="Footlocker, Calgary, AB"
                date="June 2016 – Aug 2022" />
            <Description
                list="Delivered outstanding customer service with a strategic focus on achieving daily sales targets, contributing to sustained revenue growth and customer satisfaction" />
            <Description
                list="Skillfully analyzed and optimized stock placement, making informed decisions that significantly boosted daily sales and improved inventory turnover" />
            <Description
                list="Accurately predicted future inventory needs, effectively minimizing labor costs and optimizing resource allocation in line with anticipated stock shipments" />
        </div>
        <div class="margin" :class="{ 'fade-in': isVisible5 }">
            <Title employer="CEO" location="Ultimate Taekwondo, Calgary, AB" date="Jan 2018 – Dec 2021" />
            <Description
                list="Maintained a pivotal leadership role by directing instructors to fulfill their duties effectively on-site, ensuring adherence to organizational standards and enhancing operational efficiency" />
            <Description
                list="Addressed various business challenges by devising innovative solutions in marketing and investment strategies, significantly improving business outcomes and growth" />
            <Description
                list=" Continuously developed and improved the Taekwondo curriculum for both coaches and students, while strictly adhering to ATA safety guidelines to uphold professionalism and ensure a safe learning environment" />
        </div>
        <Header :iconSrc="'fa-solid fa-user-graduate'" titleText="EDUCATION" />
        <div class="lastMargin">
            <Title employer="B.A.Sc. in Software System Engineering" location="University of Regina"
                date="Sept 2020 – Aug 2024" />
        </div>
        <div class="lastMargin">
            <Title employer="B.Sc. in Chemical Engineering" location="University of Calgary"
                date="Sept 2016 – Apr 2019" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Header from "./Header.vue";
import Title from "./Title.vue";
import Description from "./Description.vue";
const skcdaGithubUrl =
    "https://github.com/BinaryQuBit/SKCDA---Webpage---Design";
const skcdaDemoUrl = "https://www.skcda.ca/";
const codeGeneratorUrl = "https://github.com/BinaryQuBit/CodeGenerator";

const isVisible1 = ref(false);
const isVisible2 = ref(false);
const isVisible3 = ref(false);
const isVisible4 = ref(false);
const isVisible5 = ref(false);

const offset = 100;

function handleScroll() {
    const scrollTop = window.scrollY + window.innerHeight - offset;
    const marginElements = document.querySelectorAll(".margin");
    marginElements.forEach((element, index) => {
        if (element instanceof HTMLElement && scrollTop > element.offsetTop) {
            switch (index) {
                case 0:
                    isVisible1.value = true;
                    break;
                case 1:
                    isVisible2.value = true;
                    break;
                case 2:
                    isVisible3.value = true;
                    break;
                case 3:
                    isVisible4.value = true;
                    break;
                case 4:
                    isVisible5.value = true;
                    break;
            }
        }
    });
}

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.margin {
    margin-top: 20px;
    margin-bottom: 20px;
    padding-bottom: 20px;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    background-color: var(--container-color);
}

.lastMargin {
    padding-top: 10px;
    padding-bottom: 20px;
}

.fade-in {
    opacity: 1;
    transform: translateY(0);
}
</style>
