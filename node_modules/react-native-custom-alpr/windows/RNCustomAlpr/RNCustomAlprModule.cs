using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Custom.Alpr.RNCustomAlpr
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNCustomAlprModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNCustomAlprModule"/>.
        /// </summary>
        internal RNCustomAlprModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNCustomAlpr";
            }
        }
    }
}
