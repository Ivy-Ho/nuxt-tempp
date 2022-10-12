<template>
  <div class="article">
    <main class="article__body section-container">
      <h1 class="article__header1">this is article{{ $route.params.id }}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        recusandae corrupti excepturi maxime nulla aspernatur dolores libero,
        cumque doloribus at, facere porro adipisci perferendis eius vitae harum
        sunt ipsum omnis, aliquam similique rerum molestiae perspiciatis? Eos
        magnam sint voluptates minima tempora. Distinctio, modi minus.
        Praesentium, obcaecati quibusdam! Nihil laborum maxime debitis magnam
        aliquam? Quam ratione explicabo nesciunt ducimus hic quis deserunt id
        repudiandae perferendis at porro in corrupti quo deleniti quidem nulla
        cumque amet ut tempora dignissimos vel, dicta quae eligendi! Quae quam
        voluptatum rerum modi veniam fugiat ab assumenda, harum blanditiis cum
        iure repudiandae unde nostrum velit. Voluptatum nihil esse non nisi
        provident voluptatibus beatae voluptate assumenda omnis deleniti, odit
        neque iste. Laborum, inventore veritatis ullam sit molestiae sint. Quod
        tempora hic explicabo alias, saepe quisquam corporis, voluptate id
        possimus velit consequatur unde itaque commodi maxime fugit debitis iste
        ratione, voluptates eos minima sapiente? Minima ducimus odit voluptates
        a! Dolores enim earum, est numquam aut non alias molestiae culpa,
        necessitatibus nisi corporis eius.
      </p>
      <h2 class="article__header2">this is header2</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos earum
        debitis rerum, laudantium esse neque ad quaerat deleniti cum perferendis
        vel dolorum quas eveniet omnis vero voluptate tenetur quis reprehenderit
        porro numquam! Natus pariatur sunt placeat maxime nemo at fuga
        reiciendis excepturi modi minima iste sit rem hic officiis est veniam
        amet nulla impedit blanditiis quidem, quibusdam nihil voluptatem?
        Obcaecati, minima ad? Incidunt quasi mollitia consequatur quos similique
        facere natus ipsa nisi ad. Sint, debitis nihil laudantium mollitia
        minima amet saepe facilis? Iure qui vitae minima eius vel eos dolores,
        assumenda odio fugit suscipit dolor eveniet magni? Ea, itaque
        architecto.
      </p>
      <h2 class="article__header2">this is header2</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio commodi
        optio aspernatur voluptatum eius perspiciatis dolore ut provident
        aperiam quasi obcaecati nisi voluptate dolor unde eaque sapiente
        similique, cumque libero, quos ex repudiandae consequatur? Eveniet
        architecto accusantium iure itaque nemo tempore ratione nesciunt laborum
        dignissimos accusamus iste odit, libero dolorem ducimus illo
        exercitationem temporibus voluptatum sunt dolores magni qui autem optio.
        Repudiandae, nam at incidunt fuga obcaecati a rerum, nesciunt magnam rem
        repellendus ut inventore tempore sequi, quos quae aliquam harum. Modi,
        ipsum. Quaerat incidunt eveniet nobis nostrum, quia accusantium deserunt
        ab, facilis cupiditate dolorem iusto culpa dignissimos aspernatur harum!
      </p>
      <h2 class="article__header2">this is header2</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tempora
        quae dolorem, architecto aut explicabo ullam. Quisquam impedit quasi
        voluptates! Nesciunt mollitia repellendus dolores saepe vero quo,
        quisquam obcaecati quaerat suscipit corrupti? Nesciunt sunt laboriosam a
        ullam voluptatibus modi, delectus amet quia pariatur repellendus maxime,
        impedit ipsam dolor voluptatum cumque similique omnis ea doloribus eos
        praesentium dignissimos. Sit alias perferendis quaerat fuga
        perspiciatis? Inventore ipsa incidunt repudiandae tempora corporis,
        dolores quibusdam ea voluptatum dolor deserunt, molestias officia rerum
        corrupti beatae quod vero eos quam, et neque debitis eveniet quaerat
        voluptatibus. Dolor natus est tempora vel sequi in quae eaque nam vitae
        nostrum odio ex, voluptatem aperiam libero maiores dolorem reprehenderit
        illo assumenda. Cumque laudantium expedita suscipit quae eveniet earum
        maxime repellendus quas doloremque, ad commodi dolores veniam deleniti
        ratione, explicabo delectus velit facilis, unde amet. Dolor quidem
        impedit, vitae maiores facere repellendus, est necessitatibus laboriosam
        voluptas voluptate accusantium dolore corrupti. lorem20
      </p>
      <nuxt-link to="/index#articles-section" class="back-btn"
        >back to list</nuxt-link
      >
    </main>
  </div>
</template>
<script>
export default {
  name: 'ArticlePage',
  layout: 'DefaultLayout',
}
</script>
<style scoped lang="scss">
.article {
  padding-top: 50px;
  padding-bottom: 50px;
  &__header1 {
    font-size: 48px;
    font-weight: var(--medium);
  }
  &__header2 {
    font-size: 32px;
    font-weight: var(--medium);
  }
  p {
    margin-bottom: 50px;
  }
}
.back-btn {
  border: 2px solid #616161;
  padding: 8px 10px;
  border-radius: 7px;
  font-weight: var(--regular);
  color: #616161;
  display: block;
  width: 120px;
  text-align: center;
  margin-left: auto;
  &:hover {
    background-color: #616161;
    color: white;
  }
}
</style>
