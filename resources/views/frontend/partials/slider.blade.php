<v-carousel dark>
    @foreach ($sliders as $slider)
    <v-carousel-item src="{{Storage::url($slider->src_image)}}">
    </v-carousel-item>
    @endforeach
</v-carousel>
