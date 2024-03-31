<?php

namespace App\Notifications\Post;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Auth;

class PostUpdateNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public $post;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($post)
    {
        $this->post = $post;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database', 'broadcast'];
    }

    public function toArray($notifiable)
    {
        $gender = $this->post->user->gender == "male" ? "his" : "her";

        return [
            "post" => $this->post,
            "message" => $this->post->user->name . " has updated " . $gender . " post titled: <b>" . $this->post->title . "</b>",
            "url" => route('list.show', $this->post->list->slug),
            "image" => route('image.post', ['filename' => $this->post->post_image]),
        ];
    }

    /**
     * Get the type of the notification being broadcast.
     *
     * @return string
     */
    public function broadcastType()
    {
        return 'post.updated';
    }
}
