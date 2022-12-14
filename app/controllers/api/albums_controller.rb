class Api::AlbumsController < ApplicationController

    wrap_parameters include: Album.attribute_names + [:photo], format: :multipart_form

    def index
        @albums = Album.all
    end

    def show
        @album = Album.find(params[:id])
        @songs = Song.where(album_id: params[:id])
    end

    private

    def album_params
        params.require(:album).permit(
            :album_name, :artist_id, :year, :photo
        )
    end

end
