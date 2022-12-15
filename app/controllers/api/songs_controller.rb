class Api::SongsController < ApplicationController

    wrap_parameters include: Song.attribute_names + [:song], format: :multipart_form

    def index
        # @songs = Song.where
    end

end
