<script setup>
const props = defineProps({
    tabs: Object
})

const activeTab = ref(0);

const setActiveTab = (index) => {
    activeTab.value = index
}
</script>

<template>
    <div class="tabs">
        <div class="tabs__menu">
            <div class="menu">
                <ul class="menu__list">
                    <li :class="['menu__item', { 'menu__item--active': activeTab === 0 }]" @click="setActiveTab(0)">
                        <span>Описание</span>
                    </li>
                    <li :class="['menu__item', { 'menu__item--active': activeTab === 1 }]" @click="setActiveTab(1)">
                        <span>Характеристики</span>
                    </li>
                    <li :class="['menu__item', { 'menu__item--active': activeTab === 2 }]" @click="setActiveTab(2)">
                        <span>Наличие в магазинах</span>
                    </li>
                    <li v-for="(tab, index) in props.tabs.attributes.tabs" :key="index"
                        :class="['menu__item', { 'menu__item--active': activeTab === (index + 3) }]"
                        @click="setActiveTab(index + 3)">
                        <span>{{ tab.title }}</span>
                    </li>
                </ul>
            </div>
        </div>


        <div class="tabs__main">
            <div v-if="activeTab === 0">
                <div v-html="props.tabs.attributes.description"></div>
            </div>
            <div v-if="activeTab === 1">
                <div class="tabs__specification">
                    <div class="right">
                        <div class="info-block__character"  
                        v-for="(property, key) in Object.values(props.tabs.attributes.properties).slice(0, Math.ceil(Object.keys(props.tabs.attributes.properties).length / 2))"
                        :key="key">
                            <p class="info-block__title">{{ property.name }}</p>
                            <p v-if="property.value" class="info-block__subtitle">{{ property.value }}</p>
                            
                        </div>
                    </div>
                    <div class="left">
                        <div class="info-block__character"  v-for="(property, key) in Object.values(props.tabs.attributes.properties).slice(Math.ceil(Object.keys(props.tabs.attributes.properties).length / 2))"
                        :key="key">
                            <p class="info-block__title">{{ property.name }}</p>
                            <p v-if="property.value" class="info-block__subtitle">{{ property.value }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div v-html="props.tabs.attributes?.tabs[activeTab - 3]?.info"></div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
.tabs {
    max-width: 1200px;
    width: 100%;

    &__menu {
        margin-bottom: 36px;
    }

    &__specification{
        display: flex;
        gap: 50px;
    }

    &__main {
        margin-bottom: 76px;
    }
}

.left{
    width: 50%;
}
.right{
    width: 50%;
}

.menu {
    border-bottom: 1px solid var(--color-blue-transparent);

    &__list {
        display: flex;
        align-items: center;
        column-gap: 16px;
    }

    &__item {
        padding: 20px 16px;
        cursor: pointer;
        position: relative;


        &--active {
            color: var(--color-blue);
            position: relative;

            &::after {
                content: "";
                position: absolute;
                border-bottom: 1px solid var(--color-blue);
                height: 1px;
                bottom: 0;
                left: 0;
                width: 100%;
            }
        }
    }

}
</style>