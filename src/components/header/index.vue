<script>
import { mapActions} from "vuex"
export default{
  name: 'Header',
  methods:{
    ...mapActions({logout:'LOGOUT'}),
    async userLogout(){
     await this.logout()
     this.$router.push('/')

    }
  }
}
</script>

<template>
  <!--header-->
    <header class="header">
        <div class="container">
            <nav id="navbar_main"
                class="navbar  navbar-expand-lg navbar-light p-0 d-flex flex-row  justify-content-between">
                <div class="nav-left">
                    <a class="navbar-brand" href="#">
                        <img src="@/assets/images/logo.png" alt="logo" />
                    </a>
                </div>
                <div class="nav-right">
                    <button id="navbar-toggler" class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavDropdown">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link" href="#" id="navbarDropdownMenuLink12" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Billionaires
                                    <div class="image icon dropdown">
                                        <i class="fas fa-chevron-down"></i>
                                    </div>
                                </a>
                                <div class="dropdown-menu">
                                    <ul class="list-unstyled sub_menu">
                                        <li>
                                            <a href="#">Forbes Daily Cover Stories</a>
                                        </li>
                                        <li>
                                            <a href="#">Crypto Confidential</a>
                                        </li>
                                        <li>
                                            <a href="#">Forbes Coupons</a>
                                        </li>
                                        <li>
                                            <a href="#">Dark Capital</a>
                                        </li>
                                        <li>
                                            <a href="#">Free Issue of Forbes</a>
                                        </li>
                                        <li>
                                            <a href="#">Forbes Editors’ Picks</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link" href="#" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">innovation
                                    <div class="image icon dropdown">
                                        <i class="fas fa-chevron-down"></i>
                                    </div>
                                </a>
                                <div class="dropdown-menu">
                                    <ul class="list-unstyled sub_menu">
                                        <li>
                                            <a href="#">Forbes Daily Cover Stories</a>
                                        </li>
                                        <li>
                                            <a href="#">Crypto Confidential</a>
                                        </li>
                                        <li>
                                            <a href="#">Forbes Coupons</a>
                                        </li>
                                        <li>
                                            <a href="#">Dark Capital</a>
                                        </li>
                                        <li>
                                            <a href="#">Free Issue of Forbes</a>
                                        </li>
                                        <li>
                                            <a href="#">Forbes Editors’ Picks</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link" href="#" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">Leadership
                                    <div class="image icon dropdown">
                                        <i class="fas fa-chevron-down"></i>
                                    </div>
                                </a>
                                <div class="dropdown-menu">
                                    <ul class="list-unstyled sub_menu">
                                        <li>
                                            <a href="#">Forbes Daily Cover Stories</a>
                                        </li>
                                        <li>
                                            <a href="#">Crypto Confidential</a>
                                        </li>
                                        <li>
                                            <a href="#">Forbes Coupons</a>
                                        </li>
                                        <li>
                                            <a href="#">Dark Capital</a>
                                        </li>
                                        <li>
                                            <a href="#">Free Issue of Forbes</a>
                                        </li>
                                        <li>
                                            <a href="#">Forbes Editors’ Picks</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Money</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">business</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link" href="#" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">More
                                    <div class="image icon dropdown">
                                        <i class="fas fa-chevron-down"></i>
                                    </div>
                                </a>
                                <div class="dropdown-menu">
                                    <ul class="list-unstyled sub_menu">
                                        <li>
                                            <a href="#">Forbes Daily Cover Stories</a>
                                        </li>
                                        <li>
                                            <a href="#">Crypto Confidential</a>
                                        </li>
                                        <li>
                                            <a href="#">Forbes Coupons</a>
                                        </li>
                                        <li>
                                            <a href="#">Dark Capital</a>
                                        </li>
                                        <li>
                                            <a href="#">Free Issue of Forbes</a>
                                        </li>
                                        <li>
                                            <a href="#">Forbes Editors’ Picks</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item dropdown last_drop_down">
                                <a class="nav-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-globe"></i> Nigeria
                                </a>
                                <div class="dropdown-menu coutry_menu">
                                    <ul class="coutry_menu_list">
                                        <li><a href="#">繁體中文</a></li>
                                        <li><a href="#">简体中文</a></li>
                                        <li><a href="#">South Africa</a></li>
                                        <li><a href="#">Türkçe</a></li>
                                        <li><a href="#">ไทย</a></li>
                                        <li><a href="#">Svenska</a></li>
                                        <li><a href="#">Русский</a></li>
                                        <li><a href="#">Português, BR</a></li>
                                        <li><a href="#">Portugal</a></li>
                                        <li><a href="#">Polski</a></li>
                                        <li><a href="#">Nederlands</a></li>
                                        <li><a href="#">Melayu</a></li>
                                        <li><a href="#">Mongolian</a></li>
                                        <li><a href="#">한국어</a></li>
                                        <li><a href="#">日本語</a></li>
                                        <li><a href="#">Italiano</a></li>
                                        <li><a href="#">Indonesia</a></li>
                                        <li><a href="#">Magyar</a></li>
                                        <li><a href="#">Canada Français</a></li>
                                        <li><a href="#">Français</a></li>
                                        <li><a href="#">Suomi</a></li>
                                        <li><a href="#">Friedberg-fr</a></li>
                                        <li><a href="#">Friedberg-ca</a></li>
                                        <li><a href="#">Spanish-mx</a></li>
                                        <li><a href="#">Chile</a></li>
                                        <li><a href="#">Español</a></li>
                                    </ul>
                                </div>
                                <i class="fas fa-chevron-down"></i>
                            </li>

                            <li class="nav-item dropdown last_drop_down">
                                <a class="nav-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-globe"></i> User
                                </a>
                                <div class="dropdown-menu">
                                    <ul class="list-unstyled sub_menu">
                                        <li @click="userLogout">
                                            <a>Logout</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    <!--header end-->
</template>
<style scoped>

/**header**/
a.navbar-brand img {
    max-width: 180px;
}
.header {
 /* position: fixed; */
 top: 0;
 left: 0;
 background-color: #ffffff;
 width: 100%;
 background: #ffffff;
 z-index: 11;
 padding: 5px 0;
}

.navbar-light .navbar-nav .nav-link {
 font-size: 16px;
 padding: 0px 20px;
 text-transform: capitalize;
 line-height: 56px;
 font-weight: 500;
}

nav.navbar {
 min-height: 60px;
}

.navbar-light .navbar-nav .nav-link {
 color: #000;
 font-weight: 700;
}

.sub_menu {
 padding-top: 10px;
}

.sub_menu li {
 margin: 0 0 0px;
}

.sub_menu li a {
 color: #000;
 padding: 18px 15px;
 display: block;
 line-height: normal;
 font-size: 15px;
 font-weight: 600;
}

.sub_menu li a:hover {
 background: #fff;
 color: #02cead;
}

.dropdown-menu {
 min-width: 220px;
 background-color: #fff;
 box-shadow: 0px 14px 34px -12px rgba(0, 0, 0, 0.5);
 border-radius: 0px 0px 5px 5px !important;
}

.dropdown:hover .dropdown-menu {
 display: block !important;
}

.navbar-expand-lg .navbar-nav .dropdown-menu {
 position: absolute;
 width: auto;
 left: 0;
 border: none;
 top: 54px;
 border-radius: 0px;
 padding: 0px;
}

.nav-item.dropdown > i {
 display: none;
}

.last_drop_down .dropdown-menu {
 left: -100% !important;
}

.navbar-nav .dropdown-menu .dropdown-item {
 font-size: 12px;
 line-height: 18px !important;
 white-space: inherit;
 padding: 8px 15px;
}

.navbar-nav .dropdown-menu .dropdown-item:hover {
 color: #ffffff !important;
 background: #454545;
}

header {
 border-bottom: 1px solid #ededed;
}

.text-black {
 color: #454545 !important;
}

.dropnav .w-100 {
 width: 100% !important;
 display: inline-flex;
}

.image.icon.dropdown {
 display: inline;
 margin-left: 5px;
}

.image.icon.dropdown img {
 width: 10px;
}

.navbar-light .navbar-nav .dropdown:hover .nav-link .image.icon.dropdown i {
 transform: rotate(180deg);
}

.language_menu .dropdown-menu {
 min-width: 110px;
}

.navbar-expand-lg .navbar-nav .dropdown-menu.coutry_menu {
 list-style: none;
 width: 100%;
 left: initial !important;
 right: 0;
 min-width: 320px;
 max-width: 320px;
 padding-bottom: 3px;
 padding-top: 10px;
 border: 1px solid #cacaca;
 border-top: 3px solid #00ba9c;
 margin-top: 0px;
}

.navbar-nav .dropdown-menu.coutry_menu:before {
 position: absolute;
 border: 6px solid transparent;
 border-bottom-color: #00ba9c;
 content: "";
 right: 42px;
 float: right;
 margin-top: -25px;
}

.coutry_menu_list {
 display: flex;
 flex-wrap: wrap;
 list-style: none;
 justify-content: space-between;
 align-items: flex-start;
 padding: 0;
}

.coutry_menu_list li {
 flex: 0 0 50%;
 width: 50%;
 line-height: normal;
}

.coutry_menu_list li a {
 font-size: 14px;
 line-height: normal;
 padding: 8px 15px;
}

/***header end **/
</style>