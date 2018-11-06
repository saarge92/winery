@if(count($vines_for_review))
@foreach($vines_for_review->chunk(3) as $vine_chunk)
    <v-layout row wrap>
        @foreach($vine_chunk as $vine)
        <v-flex xs12 md4 sm12 lg4>
            <div class="card my-2 mx-2">
                <div class="text-md-right text-xs-right text-sm-right">
                    <i class="fas fa-wine-bottle"></i>{{$vine->volume / 1000}} л
                </div>
                <div class="img-holder">
                    @if($vine->image_src!=null)
                        <img src="{{Storage::url($vine->image_src)}}" class="">
                        @else
                        <img src="{{Storage::url('projectFolders/unknow.png')}}">
                        @endif
                </div>
                <div class="description">
                    <p>
                        {{$vine->name_rus}}
                        {{$vine->name_en ? ','.$vine->name_en : ''}},
                        {{$vine->volume / 1000}} л
                    </p>
                </div>
                <div class="info-wine">
                    <v-layout row wrap>
                        <v-flex md4 class="text-md-left text-sm-left text-xs-left">
                            {{$vine->color}},
                            {{$vine->sweet}}
                        </v-flex>
                        <v-flex md4 class="text-md-center text-sm-senter text-xs-center">
                            {{$vine->country}}
                        </v-flex>
                        <v-flex md4 class="text-md-right text-sm-right text-xs-right">
                            {{$vine->year}} г
                        </v-flex>
                    </v-layout>
                </div>
                <div class="price">
                    <i class="fas fa-wine-bottle" style="color:#ec3800;"></i> {{$vine->price}} руб
                      <i class="fas fa-wine-glass-alt"></i> {{$vine->price_cup}} руб
                </div>
                <div class="price">

                </div>
                <div class="view_button">
                    <v-btn href="{{route('viewWine',['id'=>$vine->id])}}" color="orange darken-3" class="white--text">
                        <i class="fas fa-search-plus"></i>Посмотреть
                    </v-btn>
                </div>
            </div>
        </v-flex>
        @endforeach
    </v-layout>
    @endforeach
    <v-container>
        <v-layout row wrap>
            <v-flex md12>
                {{$vines->appends($_GET)->links()}}
            </v-flex>

        </v-layout>
    </v-container>

    @else
    <p>Вина отсутсвуют по заданным критериям</p>
    @endif
