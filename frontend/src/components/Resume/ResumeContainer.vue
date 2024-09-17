<template>
    <div>
        <Header :iconSrc="'fa-solid fa-terminal'" titleText="EMPLOYMENT HISTORY" />
        
        <div class="margin" :class="{ 'fade-in': isVisible1 }">
            <Title :demoIcon="'fa-solid fa-display'"
                :demoLink="stardustSoftwareSolutionUrl" employer="Founder & CEO" location="Stardust Software Solutions, Calgary, AB"
                date="Aug 2024 - Present" />
            <Description
                list="Spearheaded the development and delivery of 6 custom software solutions for businesses across various industries, specializing in web and mobile applications" />
            <Description
                list="Designed and implemented scalable software architectures using modern technologies, resulting in solutions that support up to 1,000 concurrent users" />
            <Description
                list="Oversaw all stages of the software development lifecycle, from initial client consultations and project planning to deployment and post-launch support" />
            <Description 
                list="Cultivated strong client relationships, achieving a 100% client retention rate and securing long-term contracts for continuous collaboration" />
            <Description list="Technologies used: WordPress, React/Native, JavaScript, Figma, StoriesOnboard" isStar />
        </div>
        <div class="margin" :class="{ 'fade-in': isVisible2 }">
            <Title :githubIcon="'fa-brands fa-github'" :demoIcon="'fa-solid fa-display'" :githubLink="skcdaGithubUrl"
                :demoLink="skcdaDemoUrl" employer="Full Stack Developer" location="Saskatchewan Career Development Association, Regina, SK"
                date="May 2023 - Aug 2023" />
            <Description
                list="Led a team of 3 members in designing and prototyping a web application for a client and subsequently single-handedly built and deployed the live version" />
            <Description
                list="Executed a content migration process, transferring over 50 selected pages and blogs from Weebly to GreenGeeks hosting platform, resulting in easier to find and manageable content" />
            <Description
                list="Implemented essential features such as secure credit card payment processing and optimized form registrations, resulting in easier membership renewal and enrollment processing time for over 100 members" />
            <Description list="Technologies used: WordPress, JavaScript, Figma, StoriesOnboard, GreenGeeks" isStar />
        </div>
        <div class="margin" :class="{ 'fade-in': isVisible3 }">
            <Title :githubIcon="'fa-brands fa-github'" :githubLink="codeGeneratorUrl" employer="Research Assistant"
                location="University of Regina" date="July 2023 - Aug 2023" />
            <Description
                list="Proposed the concept of generating datasets by utilizing another Large Language Model, Chat-GPT, resulting in an increase in data sample generation efficiency" />
            <Description
                list="Collaborated with a PhD student to scrape and preprocess erroneous code samples from Chat-GPT, resulting in a dataset expansion of 50 percent compared to initial projection" />
            <Description
                list="Integrated JavaScript and Node.js technologies into the API for efficient tokenization of previous chat history, enhancing the model’s capability to prevent duplicate code generation, resulting in a decrease in redundant code occurrences within the dataset" />
            <Description list="Technologies used: Node.js, JavaScript" isStar />
        </div>
        <div class="margin" :class="{ 'fade-in': isVisible4 }">
            <Title employer="Information Technology Operations Intern" location="SGI, Saskatoon, SK" date="Jan 2022 – Aug 2022" />
            <Description
                list="Identified and resolved a critical blue screen of death issue affecting multiple members across the organization, demonstrating problem-solving skills and technical expertise" />
            <Description
                list="Responded effectively to a disaster scenario by setting up infrastructure outside for salvage operations, enabling inspection activities to proceed smoothly, and ensuring minimal disruption to operations during crisis situations" />
            <Description
                list="Managed daily tasks such as packaging applications and overseeing Azure controls, contributing to the smooth functioning of IT operations and maintaining the efficiency of cloud-based services" />
            <Description list="Technologies used: Azure, PuTTY, SNOW" isStar />
        </div>
        <div class="margin" :class="{ 'fade-in': isVisible5 }">
            <Title employer="Asset Manager/Sales Associate" location="Footlocker, Calgary, AB"
                date="June 2016 – Aug 2022" />
            <Description
                list="Delivered outstanding customer service with a strategic focus on achieving daily sales targets, contributing to sustained revenue growth and customer satisfaction" />
            <Description
                list="Skillfully analyzed and optimized stock placement, making informed decisions that significantly boosted daily sales and improved inventory turnover" />
            <Description
                list="Accurately predicted future inventory needs, effectively minimizing labor costs and optimizing resource allocation in line with anticipated stock shipments" />
        </div>
        <div class="margin" :class="{ 'fade-in': isVisible6 }">
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
const stardustSoftwareSolutionUrl = "https://stardustsolution.com/"

const isVisible1 = ref(false);
const isVisible2 = ref(false);
const isVisible3 = ref(false);
const isVisible4 = ref(false);
const isVisible5 = ref(false);
const isVisible6 = ref(false);

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
                case 5:
                    isVisible6.value = true;
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
