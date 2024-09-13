<script setup>
const {data: blogs, error} = fetchBlog()
</script>

<template>
  <section class="section container">
    <div class="section__body">
        <div class="section__info">
            <h2 class="section__title">
              Блог
            </h2>
        </div>
      <div class="section__list">
        <UICardBlog v-for="blog in blogs?.data"
        :key="blog.id"
        :title= "blog.attributes.title"
        :image = "blog.attributes.image"
        :link = "blog.attributes.detail_page"
        :section = "blog.attributes.section_name"
        ></UICardBlog>
      </div>
    </div>
  </section>
</template>