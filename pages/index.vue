<template>
  <div class="home">
    <header class="header container">
      <div class="header-Logo">
        <nuxt-link :to="{}">
          <img
            :src="Logo"
            width="70"
            height="70"
          >
        </nuxt-link>
      </div>
      <nav class="header-Nav">
        <ul>
          <li>
            <nuxt-link :to="{}">item</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{}">coordinate</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{}">magazine</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{}">about</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{}">information</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{}">user guide</nuxt-link>
          </li>
        </ul>

        <div class="header-SearchBox">
          <form>
            <VIcon
              name="search"
              class="searchIcon" />
            <input
              :class="{ focused: isFocusedSearch }"
              type="search"
              class="search"
              placeholder="Search for"
              @focus="isFocusedSearch = true"
              @blur="isFocusedSearch = false"
            >
            <input
              type="submit"
              value="submit">
          </form>
        </div>

        <div class="header-Account">
          <ul>
            <li>
              <nuxt-link :to="{}">sign in</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{}">
                <VIcon name="favorite01" />
              </nuxt-link>

            </li>
            <li>
              <nuxt-link :to="{}">
                <VIcon name="cart" />
              </nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import Home from '@/graphql/Home.graphql'
import Logo from '@/assets/images/logo.svg'
import VIcon from '@/components/VIcon'

export default {
  components: { VIcon },

  apollo: {
    allUsers: {
      query: Home,
      loadingKey: 'loading',
    },
  },

  data() {
    return {
      isFocusedSearch: false,
    }
  },

  created() {
    this.Logo = Logo
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 1440px;
  margin: 0 auto;
}

.header {
  height: 70px;
  display: flex;
  padding: 0 40px;

  &-Nav {
    flex: 1;
    display: flex;
    justify-content: flex-end;

    > ul {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    > ul > li {
      &:last-of-type {
        margin-right: 15px;
      }
    }

    > ul > li > a {
      padding: 15px;

      font-size: 1.6rem;
      font-family: 'Roboto';
      font-weight: 600;
      color: #000;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
  }

  &-SearchBox {
    display: flex;
    align-items: center;
    margin-right: 20px;

    > form {
      position: relative;
      transition: width 0.25s;

      .searchIcon {
        position: absolute;
        top: 50%;
        left: 10px;
        margin-top: -10px;
        font-size: 1.6rem;
      }
    }
    .search {
      width: 210px;
      font-family: 'Roboto';
      font-size: 1.6rem;
      padding: 10px 10px 10px 40px;
      border: 1px solid #ddd;

      transition: width 0.25s, border 0.25s;

      &.focused {
        border: 1px solid #2f2f2f;
      }
    }

    input[type='submit'] {
      display: none;
    }
  }

  &-Account {
    display: flex;
    align-items: center;

    ul {
      display: flex;
      align-items: center;
    }

    ul > li {
      margin-right: 16px;
    }

    ul > li > a {
      font-size: 1.1rem;
      font-weight: 700;
      text-transform: uppercase;
      color: #909090;
      transition: opacity 0.25s;
      letter-spacing: 0.05em;

      /deep/ svg {
        transition: color 0.25s;
      }

      &:hover {
        opacity: 0.8;

        /deep/ svg {
          color: #9bcbeb;
        }
      }
    }
  }
}
</style>
