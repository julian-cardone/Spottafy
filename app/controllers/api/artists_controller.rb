class Api::ArtistsController < ApplicationController

    wrap_parameters include: Artist.attribute_names + [:photo], format: :multipart_form

    def show
        @artist = Artist.find(params[:id])
    end
 
end
