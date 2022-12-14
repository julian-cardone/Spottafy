class Api::SongsController < ApplicationController

    wrap_parameters include: Song.attribute_names, format: :multipart_form

    def index
        # @songs = Song.where
    end

end
