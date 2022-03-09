<?php

namespace AirSearchy\classes;

class AirSearchy
{
    private static $instance;

    public function __construct()
    {
        self::initScripts();
        self::initRenders();
    }

    public static function init()
    {
        if (is_null(self::$instance)) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    private static function initScripts()
    {
        add_action('wp_enqueue_scripts', function () {
            $build = include AIRSEARCHY_PATH . '/build/index.asset.php';
            if (isset($build)) {
                wp_enqueue_script('air-searchy', AIRSEARCHY_URI . 'build/index.js', $build['dependencies'], $build['version'], true);
                wp_enqueue_style('air-searchy', AIRSEARCHY_URI . 'build/index.css');
            }
        });
    }

    private function initRenders()
    {
        self::registerActions();
    }

    private static function registerActions()
    {
        add_action('renderAirSearchy', function () {
            echo '<div id="air-searchy"></div>';
        });
    }
}
