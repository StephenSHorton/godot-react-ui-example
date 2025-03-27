extends Node2D

signal game_started

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	game_started.connect(_on_game_started)


func _on_web_view_ipc_message(message: String) -> void:
	match message:
		"game_started.emit":
			game_started.emit()


func _on_game_started() -> void:
	print("GODOT -> starting game")
	$CanvasLayer/WebView.post_message("game_started")
