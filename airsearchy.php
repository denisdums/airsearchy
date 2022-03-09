<?php
/**
 * Plugin Name: AirSearchy
 * Plugin URI: https://airsearchy.denisdums.com/
 * Description: An searchbar tool in React.
 * Version: 0.1
 * Author: denisdums
 * Author URI: https://denisdums.com
 * Text Domain: airsearchy
 * Requires at least: 5.6
 * Requires PHP: 7.0
 */

namespace AirSearchy;

require_once (__DIR__.'/classes/AirSearchy.php');
require_once (__DIR__.'/classes/APIRest.php');

use AirSearchy\classes\AirSearchy;
use AirSearchy\classes\APIRest;

defined('ABSPATH') || exit;

define('AIRSEARCHY_PATH',__DIR__);
define('AIRSEARCHY_URI',plugin_dir_url(__FILE__));

AirSearchy::init();
APIRest::init();
