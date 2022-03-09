<?php

namespace AirSearchy\classes;

use WP_Error;
use WP_REST_Server;

class APIRest
{
    private static $instance;
    public static $searchArgs;

    public function __construct()
    {
        add_action('rest_api_init', [$this, 'register_search_route']);
    }

    public static function init()
    {
        if (is_null(self::$instance)) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function register_search_route()
    {
        register_rest_route('react/v1', '/search', [
            'methods' => WP_REST_Server::READABLE,
            'callback' => [$this, 'react_ajax_search'],
            'args' => self::$searchArgs
        ]);
    }

    function init_search_args()
    {
        self::$searchArgs['s'] = [
            'description' => __('The search term.', 'denisdums'),
            'type' => 'string',
        ];
    }

    function react_ajax_search($request)
    {
        $posts = [];
        $results = [];

        if (isset($request['s'])) {
            $posts = get_posts([
                'posts_per_page' => -1,
                'post_type' => ['any'],
                's' => $request['s'],
            ]);

            foreach ($posts as $post) {
                $results[] = [
                    'id' => $post->ID,
                    'title' => $post->post_title,
                    'url' => get_permalink($post->ID),
                    'thumbnail' => get_the_post_thumbnail_url($post),
                    'type' => $post->post_type,
                    'type_label' => get_post_type_object(get_post_type($post))->labels->singular_name,
                ];
            }
        }

        return rest_ensure_response($results);
    }
}
