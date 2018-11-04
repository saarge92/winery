<v-navigation-drawer app temporary v-model="sideNav">
    <v-list>
        <v-list-tile href="{{route('home')}}#vines" @click.native.stop="sideNav=!sideNav">
            <v-list-tile-action>
                <v-icon class="fas fa-wine-bottle">
                </v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                Вино
            </v-list-tile-content>
        </v-list-tile>
    </v-list>
</v-navigation-drawer>
<v-toolbar color="grey darken-4" class="white--text">
    <v-toolbar-side-icon @click.native.stop="sideNav=!sideNav" class="white--text hidden-sm-and-up">
    </v-toolbar-side-icon>
    <v-toolbar-title>
        <a id="logo" href="{{route('home')}}"><span id="bar">BAR</span><span id="house">HOUSE</span></a>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
        <v-btn flat href="{{route('home').'#vines'}}" data-scroll-time = "1.25" class="white--text">
            <i class="fas fa-wine-bottle"></i>Вино
        </v-btn>
    </v-toolbar-items>
</v-toolbar>
