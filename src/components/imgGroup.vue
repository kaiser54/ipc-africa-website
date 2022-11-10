<template>
    <div class="img-group">

        <div class="imgpa">
            <img class="mainImg" src="../assets/Group.png" alt="" />
            <img class="abi imgg" src="../assets/image1.png" style="transform: translate(0px, 0px); opacity: 1;"
                alt="" />
            <img class="abi2 imgg" src="../assets/image3.png" style="transform: translate(0px, 0px); opacity: 1;"
                alt="" />
        </div>
    </div>
</template>

<script>
export default {
    name: "imgGroup",
};
</script>

<style>
.img-group {
    flex: 0 0 41%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    display: flex;
    justify-content: center;
    margin-bottom: 48px;
}

.imgpa {
    width: auto;
    position: relative;
}

.imgg {
    position: absolute;
}

.mainImg {
    width: 409px;
}

.abi {
    width: 298px;
    bottom: 39px;
    left: -119px;
}

.abi2 {
    width: 236px;
    top: 83px;
    right: -64px;
}

@media (max-width: 992px) {
    .mainImg {
        width: 233.54px;
        /* height: 202.03px; */
    }

    .abi {
        position: absolute;
        width: 170.35px;
        height: 59.23px;
        left: -69px;
        top: 128.19px;

    }

    .abi2 {
        position: absolute;
        width: 135.12px;
        height: 52.95px;
        left: 134.78px;
        top: 48.06px;

    }
}
</style>