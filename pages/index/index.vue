<template>
  <div class="index">
    <section class="hero">
      <h2>This is hero section</h2>
      <a v-scroll-to="'#about-section'" href="#" class="hero__scroll-down">
        <i class="fa-solid fa-angle-down"></i>
      </a>
    </section>
    <section id="about-section" class="about">
      <div class="section-container">
        <h2>About</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
          delectus quasi nostrum officia? Magnam ut nisi fugiat commodi tenetur
          est numquam, eum, expedita odit similique, sint cumque enim! Porro,
          esse iusto! Itaque ducimus dolorem reiciendis asperiores corporis
          explicabo perferendis accusamus ipsum minima aliquam. Harum, in?
          Dolorum ipsam quam quia earum mollitia molestiae exercitationem
          consequuntur asperiores, eos dolores maiores, esse, tempore ducimus
          hic id deleniti corporis minus aut voluptatum quod fugiat accusamus!
          Fugiat unde veritatis illo quibusdam incidunt, quia possimus quis
          asperiores nemo totam. Nam quibusdam, iure porro facere quasi
          recusandae dignissimos libero temporibus corrupti optio, blanditiis
          ipsam, ipsum repellendus dolorem omnis magnam modi aut magni nemo.
          Sint eaque quibusdam, dicta exercitationem omnis atque minima
          molestias dolorum maxime aperiam sequi natus consequatur libero
          eveniet earum ea voluptatibus animi necessitatibus fuga et sit. Cum
          explicabo dolorum odit similique perspiciatis facere dolores
          repellendus molestiae id minima eum odio ut accusamus eaque, itaque
          repudiandae.
        </p>
      </div>
    </section>
    <section id="authors-section" class="authors">
      <div class="section-container">
        <h2>Authors</h2>
        <ul class="authors__list">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
    <section id="articles-section" class="articles">
      <div class="section-container">
        <h2>Articles</h2>
        <div class="articles__list">
          <nuxt-link
            v-for="art in artsList"
            :key="art.id"
            class="articles__item"
            :to="'/article/' + art.id"
            >{{ art.name }}</nuxt-link
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'DefaultLayout',
  async asyncData({ $axios }) {
    const artsList = await $axios.$get(
      process.env.baseURL + '/jsonData/articlesList.json'
    )
    return { artsList }
  },
}
</script>
<style lang="scss" scoped>
h2 {
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: var(--medium);
}
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #dddddd;
  p {
    font-size: 45px;
  }
}
.about {
  background-color: #616161;
  color: white;
  padding-top: 50px;
  padding-bottom: 50px;
}
.authors {
  padding-top: 100px;
  padding-bottom: 100px;
  h2 {
    margin-bottom: 50px;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    li {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      background-color: #dddddd;
    }
  }
}
.articles {
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #616161;
  h2 {
    color: white;
    margin-bottom: 50px;
  }
  &__list {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: space-between;
    font-weight: var(--regular);
  }
  &__item {
    width: 290px;
    height: 150px;
    background-color: #dddddd;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
