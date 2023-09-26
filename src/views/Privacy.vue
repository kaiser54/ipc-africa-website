<template>
    <div class="body">
        <div class="container">
            <div class="bookmark-group">
                <h2>ON THIS PAGE</h2>
                <div class="bookmark">
                    <a href="#private" @click.prevent="scrollToHeadline('private')">
                        Privacy Policy
                    </a>
                    <a href="#info" @click.prevent="scrollToHeadline('info')">
                        Information Collection and Use
                    </a>
                    <a href="#log" @click.prevent="scrollToHeadline('log')">
                        Log Data
                    </a>
                    <a href="#cookies" @click.prevent="scrollToHeadline('cookies')">
                        Cookies
                    </a>
                    <a href="#provider" @click.prevent="scrollToHeadline('provider')">
                        Service Provider
                    </a>
                    <a href="#security" @click.prevent="scrollToHeadline('security')">
                        Security
                    </a>
                    <a href="#children" @click.prevent="scrollToHeadline('children')">
                        Children's Privacy
                    </a>
                    <a href="#change" @click.prevent="scrollToHeadline('change')">
                        Changes to This Privacy Policy
                    </a>
                    <a href="#contact" @click.prevent="scrollToHeadline('contact')">
                        Contact Us
                    </a>
                </div>
            </div>
            <div class="bookmark-content">
                <div id="private">
                    <div class="tops">
                        <p class="update">Last Updated</p>
                        <p class="date">Monday, August 28, 2023</p>
                    </div>
                    <div id="terms">
                        <h1>Private Policy</h1>
                        <p class="first">
                            Independent Purchasing Company Ltd built the The App app as a Free app. This SERVICE is provided
                            by Independent Purchasing Company Ltd at no cost and is intended for use as is. This page is
                            used to inform visitors regarding our policies with the collection, use, and disclosure of
                            Personal Information if anyone decided to use our Service. If you choose to use our Service,
                            then you agree to the collection and use of information in relation to this policy. The Personal
                            Information that we collect is used for providing and improving the Service. We will not use or
                            share your information with anyone except as described in this Privacy Policy. The terms used in
                            this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible
                            at The App unless otherwise defined in this Privacy Policy.
                        </p>
                    </div>
                </div>
                <div id="info" class="attend">
                    <div class="private">
                        <h6> Information Collection and Use</h6>
                        <p>
                            For a better experience, while using our Service, we may require you to provide us with certain
                            personally identifiable information, including but not limited to Email, Fullname, Address,
                            Phone
                            Number. The information that we request will be retained by us and used as described in this
                            privacy
                            policy. The app does use third-party services that may collect information used to identify you.
                            Link to the privacy policy of third-party service providers used by the app
                        </p>
                    </div>
                    <div class="links">
                        <a href="#">Google Play Services</a>
                        <a href="#">Google Analytics for Firebase </a>
                        <a href="#">Firebase Crashlytics</a>
                        <a href="#"> Expo</a>
                    </div>
                </div>
                <div id="log" class="private">
                    <h6>Log Data</h6>
                    <p>
                        We want to inform you that whenever you use our Service, in a case of an error in the app we collect
                        data and information (through third-party products) on your phone called Log Data. This Log Data may
                        include information such as your device Internet Protocol (“IP”) address, device name, operating
                        system version, the configuration of the app when utilizing our Service, the time and date of your
                        use of the Service, and other statistics.
                    </p>
                </div>
                <div id="cookies" class="private">
                    <h6>Cookies</h6>
                    <p>
                        Cookies are files with a small amount of data that are commonly used as anonymous unique
                        identifiers. These are sent to your browser from the websites that you visit and are stored on your
                        device's internal memory. This Service does not use these “cookies” explicitly. However, the app may
                        use third-party code and libraries that use “cookies” to collect information and improve their
                        services. You have the option to either accept or refuse these cookies and know when a cookie is
                        being sent to your device. If you choose to refuse our cookies, you may not be able to use some
                        portions of this Service.
                    </p>
                </div>
                <div id="provider" class="private attend">
                    <h6>Service Provider</h6>
                    <p>
                        We may employ third-party companies and individuals due to the following reasons:
                    </p>
                    
                    <ul>
                        <li>To facilitate our Service;</li>
                        <li>To provide the Service on our behalf;</li>
                        <li>To perform Service-related services; or</li>
                        <li>To assist us in analyzing how our Service is used.</li>
                    </ul>
                    
                    <p>
                        We want to inform users of this Service that these third parties have access to their Personal
                        Information. The reason is to perform the tasks assigned to them on our behalf. However, they are
                        obligated not to disclose or use the information for any other purpose.
                    </p>
                </div>
                <div id="security" class="private">
                    <h6>Security</h6>
                    <p>
                        We value your trust in providing us your Personal Information, thus we are striving to use
                        commercially acceptable means of protecting it. But remember that no method of transmission over the
                        internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its
                        absolute security.
                    </p>
                </div>
                <div id="children" class="private">
                    <h6>Children's Privacy</h6>
                    <p>
                        These Services do not address anyone under the age of 13. We do not knowingly collect personally
                        identifiable information from children under 13 years of age. In the case we discover that a child
                        under 13 has provided us with personal information, we immediately delete this from our servers. If
                        you are a parent or guardian and you are aware that your child has provided us with personal
                        information, please contact us so that we will be able to do the necessary actions.
                    </p>
                </div>
                <div id="change">
                    <h6>Changes to This Privacy Policy</h6>
                    <p>
                        We may update our Privacy Policy from time to time. Thus, you are advised to review this page
                        periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on
                        this page. This policy is effective as of 2023-09-18
                    </p>
                </div>
                <div id="contact">
                    <h6>Contact Us</h6>
                    <p>
                        If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact
                        us at
                        <a href="#">support@ipc-africa.com</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    data() {
        return {
            header: [
                {
                    id: 1,
                    title: "Terms and Conditions"
                },
                {
                    id: 1,
                    title: "Changes to This Terms and Conditions"
                },
                {
                    id: 1,
                    title: "Contact Us"
                },
            ]
        }
    },
    mounted() {
        window.scrollTo(0, 0);
    },
    beforeCreate() {
        if (this.$route.path === "/Privacy") {
            this.$router.push({ name: "Privacy" });
        }
    },
    methods: {
        scrollToHeadline(title) {
            const el = document.getElementById(title);
            const offset = 200; // adjust this value to set the offset from the top of the page

            if (el) {
                const rect = el.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

                window.scrollTo({
                    top: rect.top + scrollTop - offset,
                    behavior: "smooth",
                });
            }
        },
        generateLink(id) {
            return "#" + id;
        },
    }
}
</script>
    
<style scoped>
* {
    font-family: "GeneralSans-Medium", "DM Sans", sans-serif;
    text-align: justify;
}

.body {
    padding: 64px 0px 64px 0px;
}

.container {
    max-width: 85%;
    margin-inline: auto;
    display: flex;
    gap: 64px;
    margin-bottom: 64px;
}

.bookmark-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    max-width: 350px;
    width: 100%;
    position: sticky;
    position: -webkit-sticky;
    top: 200px;
    height: calc(100% - 200px);
}

.bookmark {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
}

.bookmark a {
    transition: 0.3s;
}

.bookmark a:hover {
    color: #0009b3;
    font-size: 17px;
}

.bookmark a:focus,
.bookmark a:active {
    color: #0009b3;
}

.bookmark-content {
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 64px;
}

.update {
    color: var(--grey-grey-1, #303237);
    font-family: "GeneralSans-Medium", "DM Sans", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    /* 150% */
    letter-spacing: 0.08px;
}

.date {
    color: var(--grey-grey-3, #7E8494);
    font-family: "GeneralSans-Medium", "DM Sans", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    /* 150% */
    letter-spacing: 0.08px;
}

#terms,
.attend {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

#terms h1 {
    color: #00044B;
    font-family: "GeneralSans-Medium", "DM Sans", sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.48px;
}

.tops {
    display: flex;
    gap: 8px;
}

#terms p {
    color: var(--grey-grey-3, #7E8494);
    font-family: "GeneralSans-Medium", "DM Sans", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
    /* 150% */
}
.private ul{
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: flex-start;

}
.private ul li {
    color: var(--grey-grey-3, #7E8494);
    font-family: "GeneralSans-Medium", "DM Sans", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
    list-style: circle;
    text-align: left;
   
    /* 150% */
}

.links {
    display: flex;
    flex-direction: column;
}

.links a {
    color: var(--primary-p-300, #0009B3);
    font-family: "GeneralSans-Medium", "DM Sans", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
    /* 150% */
    text-decoration-line: underline;
}

#change p {
    color: var(--grey-grey-3, #7E8494);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
    /* 150% */
}

#change {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
}

#change h6 {
    color: var(--grey-grey-1, #303237);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
    /* 150% */
}

#contact h6 {
    color: var(--grey-grey-1, #303237);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
    /* 150% */
}

#contact p {
    color: var(--grey-grey-3, #7E8494);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
    /* 150% */
}

#contact {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    /* margin-bottom: 300px; */
}

.private h6 {
    color: var(--grey-grey-1, #303237);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
    /* 150% */
}

.private p {
    color: var(--grey-grey-3, #7E8494);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
    /* 150% */
}

.private {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    /* margin-bottom: 300px; */
}

@media screen and (max-width: 1200px) {
    .bookmark-group {
        display: none;


    }

    .bookmark-content {
        max-width: 85%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 64px;
    }

    #terms h1 {
        color: #00044B;
        font-family: "GeneralSans-Medium", "DM Sans", sans-serif;
        font-size: 40px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: -0.48px;
    }
}

@media screen and (max-width: 600px) {
    .bookmark-group {
        display: none;


    }

    .bookmark-content {
        max-width: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 64px;
    }

    .body {
        padding: 20px 0px 20px 0px;
    }

    .container {
        max-width: 89%;
        margin-inline: auto;
        display: flex;
        gap: 64px;
        margin-bottom: 64px;
    }

    #terms h1 {
        color: #00044B;
        font-family: "GeneralSans-Medium", "DM Sans", sans-serif;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: -0.48px;
    }

    #change h6,
    #contact h6,
    .private {
        text-align: left;
        font-size: 17px;
        font-weight: 600;
    }
}
</style>
