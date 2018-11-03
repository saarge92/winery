<v-layout row wrap>
    <v-flex xs12 sm12 md12 lg12>
        <form class="" action="{{route('search')}}" method="post">
            <v-layout row>
                <v-flex xs10 offset-md1 md10 sm10 lg10>
                    <v-text-field label="Поиск вина"></v-text-field>
                </v-flex>
                <v-flex xs2 md2 sm2 lg2>
                    <v-btn color="red accent-4" fab small class="white--text">
                        <i class="fas fa-search"></i>
                    </v-btn>
                </v-flex>
            </v-layout>
        </form>
    </v-flex>
</v-layout>
