#pragma once

#include <st/st.h>

G_BEGIN_DECLS

#define SHELL_TYPE_WORKSPACE_BACKGROUND (shell_workspace_background_get_type ())
G_DECLARE_FINAL_TYPE (ShellWorkspaceBackground, shell_workspace_background,
                      SHELL, WORKSPACE_BACKGROUND, StWidget)

G_END_DECLS
