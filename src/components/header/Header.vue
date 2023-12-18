<template>
    <div :class="cx('wrapper')">
        <div :class="cx('container')">
            <img :class="cx('image')"
                src="https://user-images.githubusercontent.com/7110136/29002858-a09570d2-7ab4-11e7-8faa-5dd6d4458b0d.png"
                alt="..logo">
            <h1>Header Router Vue</h1>
        </div>
    </div>
</template>

<script setup>
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);


</script>