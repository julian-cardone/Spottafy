class Api::PlaylistsController < ApplicationController

    def index
        @playlists = Playlist.all
    end

    def show 
        @playlist = Playlist.find(params[:id])
    end

    def create 

        @playlist = Playlist.new(playlist_params)

        if @playlist.save
            render :show
        else
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def edit
        @playlist = Playlist.find_by(id: params[:id])

        if @playlist.update(playlist_params)
            render :show
        else 
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def delete
        @playlist = Playlist.find_by(id: params[:id])
        @playlist.delete
    end

    private
    def playlist_params
        params.require(:playlist).permit(
            :playlist_name
            )
    end

end
